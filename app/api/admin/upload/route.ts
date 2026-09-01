// Auth is enforced by middleware.ts for all /api/admin/* routes.
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

function configured() {
  return !!(
    process.env.CLOUDINARY_CLOUD_NAME &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET
  );
}

export async function POST(request: NextRequest) {
  if (!configured()) {
    return NextResponse.json(
      { success: false, error: "Cloudinary isn't configured (CLOUDINARY_* env vars missing)." },
      { status: 503 }
    );
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  if (!file) {
    return NextResponse.json({ success: false, error: "No file provided." }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ success: false, error: "Only image files are supported." }, { status: 400 });
  }

  try {
    const bytes = await file.arrayBuffer();
    const base64 = Buffer.from(bytes).toString("base64");
    const dataUri = `data:${file.type};base64,${base64}`;

    const result = await cloudinary.uploader.upload(dataUri, {
      folder: "perpex",
    });

    return NextResponse.json({ success: true, url: result.secure_url });
  } catch (err) {
    console.error("[admin/upload]", err);
    return NextResponse.json({ success: false, error: "Upload failed." }, { status: 500 });
  }
}
