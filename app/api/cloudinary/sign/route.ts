import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";
import { verifyCmsAdmin } from "@/lib/cms/admin";

export async function POST(request: NextRequest) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const token = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  if (!cloudName || !apiKey || !apiSecret) {
    return NextResponse.json({ error: "CMS media configuration is incomplete." }, { status: 503 });
  }
  if (!(await verifyCmsAdmin(token))) {
    return NextResponse.json({ error: "Administrator access required." }, { status: 403 });
  }

  const timestamp = Math.floor(Date.now() / 1000);
  const folder = "dynatech-cms";
  const signature = cloudinary.utils.api_sign_request(
    { folder, timestamp },
    apiSecret,
  );

  return NextResponse.json({ timestamp, folder, signature, cloudName, apiKey });
}
