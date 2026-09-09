create schema if not exists private;

create table if not exists public.cms_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create table if not exists public.cms_pages (
  page_key text not null,
  locale text not null check (locale in ('en', 'ar')),
  document jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now(),
  published_at timestamptz not null default now(),
  primary key (page_key, locale)
);

create table if not exists public.cms_drafts (
  page_key text not null,
  locale text not null check (locale in ('en', 'ar')),
  document jsonb not null default '{}'::jsonb,
  updated_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz not null default now(),
  primary key (page_key, locale)
);

create table if not exists public.cms_media (
  id uuid primary key default gen_random_uuid(),
  public_id text not null unique,
  resource_type text not null check (resource_type in ('image', 'video', 'raw')),
  secure_url text not null,
  format text,
  width integer,
  height integer,
  duration numeric,
  bytes bigint,
  alt_en text,
  alt_ar text,
  uploaded_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now()
);

create index if not exists cms_media_created_at_idx
on public.cms_media (created_at desc);

create or replace function private.is_cms_admin(check_user_id uuid default auth.uid())
returns boolean
language sql
security definer
set search_path = ''
stable
as $$
  select exists (
    select 1 from public.cms_admins where user_id = check_user_id
  );
$$;

revoke all on function private.is_cms_admin(uuid) from public;
grant usage on schema private to authenticated;
grant execute on function private.is_cms_admin(uuid) to authenticated;

alter table public.cms_admins enable row level security;
alter table public.cms_pages enable row level security;
alter table public.cms_drafts enable row level security;
alter table public.cms_media enable row level security;

revoke all on public.cms_admins from anon, authenticated;
revoke all on public.cms_pages from anon, authenticated;
revoke all on public.cms_drafts from anon, authenticated;
revoke all on public.cms_media from anon, authenticated;

grant select on public.cms_pages to anon, authenticated;
grant select on public.cms_admins to authenticated;
grant select, insert, update, delete on public.cms_drafts to authenticated;
grant select, insert, update, delete on public.cms_media to authenticated;

create policy "Published CMS content is public"
on public.cms_pages for select
to anon, authenticated
using (true);

create policy "Admins can verify their membership"
on public.cms_admins for select
to authenticated
using (user_id = (select auth.uid()));

create policy "Admins can read drafts"
on public.cms_drafts for select
to authenticated
using ((select private.is_cms_admin()));

create policy "Admins can create drafts"
on public.cms_drafts for insert
to authenticated
with check ((select private.is_cms_admin()) and updated_by = (select auth.uid()));

create policy "Admins can update drafts"
on public.cms_drafts for update
to authenticated
using ((select private.is_cms_admin()))
with check ((select private.is_cms_admin()) and updated_by = (select auth.uid()));

create policy "Admins can delete drafts"
on public.cms_drafts for delete
to authenticated
using ((select private.is_cms_admin()));

create policy "Admins can read media"
on public.cms_media for select
to authenticated
using ((select private.is_cms_admin()));

create policy "Admins can add media"
on public.cms_media for insert
to authenticated
with check ((select private.is_cms_admin()) and uploaded_by = (select auth.uid()));

create policy "Admins can update media"
on public.cms_media for update
to authenticated
using ((select private.is_cms_admin()))
with check ((select private.is_cms_admin()));

create policy "Admins can delete media"
on public.cms_media for delete
to authenticated
using ((select private.is_cms_admin()));

create or replace function public.publish_cms_page(p_page_key text, p_locale text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  draft_document jsonb;
begin
  if not private.is_cms_admin(auth.uid()) then
    raise exception 'Administrator access required';
  end if;

  if p_locale not in ('en', 'ar') then
    raise exception 'Unsupported locale';
  end if;

  select document into draft_document
  from public.cms_drafts
  where page_key = p_page_key and locale = p_locale;

  if draft_document is null then
    raise exception 'Save a draft before publishing';
  end if;

  insert into public.cms_pages (page_key, locale, document, updated_at, published_at)
  values (p_page_key, p_locale, draft_document, now(), now())
  on conflict (page_key, locale) do update
  set document = excluded.document,
      updated_at = excluded.updated_at,
      published_at = excluded.published_at;
end;
$$;

revoke all on function public.publish_cms_page(text, text) from public;
grant execute on function public.publish_cms_page(text, text) to authenticated;

-- After creating the first user in Supabase Auth, run this once in SQL Editor:
-- insert into public.cms_admins (user_id) values ('AUTH-USER-UUID');
