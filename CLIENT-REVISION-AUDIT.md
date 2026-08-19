# DYNATECH Website Revision Audit

Audit date: 19 August 2026

Status legend:
- **Completed**: Implemented and verified in the current website build.
- **Pending asset**: Layout/code is ready, but the requested media file is not available in the project or accessible mailbox.
- **Client confirmation**: A reference or a decision is still required.

## 1. Home Page

| Requirement | Status | Details |
| --- | --- | --- |
| Keep the mobile pattern consistent with the previous coming-soon page | **Client confirmation** | The current home page is responsive and has no horizontal overflow, but the WhatsApp visual reference is not included in the supplied revision file. Please resend the reference or confirm the current mobile presentation. |
| FFT Know More: replace CEO interview with translated FFT Story | **Pending asset** | The current button still opens `VID-20260624-WA0031.mp4` (FFT CEO interview). The translated FFT Story file is required. |
| CU Know More: use translated CARBON video | **Pending asset** | The current button still opens `VID-20260624-WA0032.mp4` (Hannover Messe speech). The translated CARBON video is required. |
| Change Auto Hub to AUTO HUB PROJECT | **Completed** | Updated in home content, navigation, and footer. |
| Correct Arabic Auto Hub wording and avoid Franco-Arabic | **Completed** | The Arabic label is now `مشروع مركز السيارات`; no Arabic `أوتو هب` label remains in the active source. Technical abbreviations and registered brand names remain in Latin characters where required. |

## Contact Page

| Requirement | Status | Details |
| --- | --- | --- |
| Use a clear Hi-Res image of The Podium building with minimal shade | **Completed** | A high-resolution image from the official Cairo Festival City Podium page is installed with a light overlay. |
| Review Arabic translation | **Completed / final client sign-off recommended** | Arabic content was reviewed and matches the English meaning. Final linguistic approval by the client is recommended before launch. |

## 2. About Us Page

| Requirement | Status | Details |
| --- | --- | --- |
| Replace background with the new corporate business video and reduce shade | **Pending asset** | The page currently uses `Dyna Tech - 01.mp4`. The new corporate business video from email is required. |
| Reduce the English CEO message to the supplied copy | **Completed** | The supplied English paragraphs and CEO signature are installed. |
| Keep the Arabic CEO message unchanged | **Completed** | The Arabic CEO message remains unchanged. |
| Update timeline entries for 2022 and 2024-2027 | **Completed** | All requested timeline entries are installed in English and Arabic. The correct brand spelling `DYNATECH` is used instead of the typo `DYNATEC`. |

## 3. Technology Partners Page

| Requirement | Status | Details |
| --- | --- | --- |
| Replace page background with the supplied Drive video | **Pending asset** | The current page uses `Dyna Tech - 03.mp4`. The supplied Google Drive file is not publicly downloadable and requires access or a direct file upload. |
| First scroll: text left, FFT and CU signing photos right | **Completed** | Both signing photos are displayed on the right and the complete message is on the left. |
| FFT page: remove all gallery photos | **Completed** | The previous FFT gallery photos have been removed. |
| FFT In 2 Minutes | **Pending asset** | Translated video file required. Suggested filename: `fft-in-2-minutes-ar.mp4`. |
| FFT Plant Engineering | **Pending asset** | Translated video file required. Suggested filename: `fft-plant-engineering-ar.mp4`. |
| FFT Flexible Production Technologies | **Available but confirmation required** | `VID-20260623-WA0008.mp4` is currently used. Please confirm that this is the requested translated Flexible Production Technologies video. |
| FFT Story translated into Arabic | **Pending asset** | The translated FFT Story file is required. The same file can also be used by the Home FFT Know More button. |
| CU background: non-translated CU-CARBON movie | **Pending asset** | The current CU background uses `VID-20260624-WA0032.mp4`. The original non-translated CU-CARBON movie is required. |
| Do not repeat wording under the CU gallery | **Completed** | Repeated gallery wording was removed. |
| Hannover Messe speech translated into Arabic | **Completed / confirmation recommended** | `VID-20260624-WA0032.mp4` is included. Please confirm the delivered file contains the approved Arabic translation. |
| CARBON video translated into Arabic | **Pending asset** | The translated CARBON video is required. The same file can also be used by the Home CU Know More button. |

## 4. Auto Hub Project Page

| Requirement | Status | Details |
| --- | --- | --- |
| Section 1: statement left and clear 3D building image right | **Completed** | Implemented with a clear 3D project render. |
| Section 2: complete Project Introduction left and building image right | **Completed** | Implemented with all supplied wording on the left and a separate clear building render on the right. |
| Section 3: keep Project Management Team unchanged | **Completed** | The four management cards and biographies remain unchanged. |
| Section 4: keep Key Project Figures unchanged | **Completed** | The eight project figures and animated counters remain unchanged. |
| Gallery after the four requested sections | **Client confirmation** | The current page contains the Auto Hub gallery as a fifth section due to an earlier instruction. The latest revision file describes only four sections. Please confirm whether the gallery should remain or be removed. |

## 5. Tech Info Page

| Requirement | Status | Details |
| --- | --- | --- |
| Background: Electric Vehicle Chassis video | **Pending asset** | The Gmail attachment is tied to a private mailbox session and was not present in the connected mailbox. The original video file is required. |
| Remove FFT Tech Info content | **Completed** | The FFT card, article content, and published article route were removed. The old URL now returns 404. |
| Robin Zeng, CEO of CATL video with title | **Pending asset** | Arabic-translated video file required. Suggested filename: `robin-zeng-catl-ar.mp4`. |
| IEA Battery Report video with title | **Pending asset** | Arabic-translated video file required. Suggested filename: `iea-battery-report-ar.mp4`. |

Until the two requested videos are delivered, the Tech Info page intentionally contains only its hero section and no replacement cards.

## 6. Careers Page

| Requirement | Status | Details |
| --- | --- | --- |
| Remove “Build Egypt’s Automotive Future With Us” | **Completed** | Removed from the page and translation data. |
| Remove “Open Positions” | **Completed** | Removed from the page and translation data. |
| Keep “Why Join Us” unchanged and avoid repeated wording | **Completed** | The original Why Join DYNATECH content is retained once, without repeated headings or paragraphs. |
| Replace background with the supplied email video | **Pending asset** | The Gmail attachment is tied to a private mailbox session and was not present in the connected mailbox. The original video file is required. |

## Required Media Delivery List

Please provide the following original files through a public Google Drive/WeTransfer link or upload them directly to the project:

1. Translated FFT Story video.
2. Translated CU CARBON video.
3. New About Us corporate business background video.
4. Technology Partners main background video from the supplied Drive link with public download access.
5. FFT In 2 Minutes, translated into Arabic.
6. FFT Plant Engineering, translated into Arabic.
7. Confirmation or replacement for FFT Flexible Production Technologies (`VID-20260623-WA0008.mp4`).
8. Original non-translated CU-CARBON movie for the CU page background.
9. Electric Vehicle Chassis video for the Tech Info background.
10. Robin Zeng, CEO of CATL video, translated into Arabic.
11. IEA Battery Report video, translated into Arabic.
12. Careers page background video.

## Final Verification

- Desktop and mobile pages were checked at 1440px and 390px widths.
- No horizontal overflow was detected.
- No browser console errors were detected on the audited pages.
- ESLint, TypeScript, and the production build pass successfully.
