import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_S3_SECRET_ACCESS_KEY!,
  },
});

async function uploadFileToS3(
  fileBuffer: Buffer,
  fileName: string,
): Promise<string> {
  const params = {
    Bucket: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME,
    Key: `uploads/${fileName}`,
    Body: fileBuffer,
    ContentType: "application/pdf",
  };

  const command = new PutObjectCommand(params);
  await s3Client.send(command);
  const fileUrl = `https://${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_S3_REGION}.amazonaws.com/uploads/${fileName}`;

  return fileUrl;
}

export async function POST(request: Request): Promise<Response> {
  try {
    const formData: FormData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No File Found" }, { status: 400 });
    }

    const buffer: Buffer = Buffer.from(await file.arrayBuffer());
    const fileName: string = await uploadFileToS3(buffer, file.name);

    return NextResponse.json({ success: true, fileName });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Error Uploading File" },
      { status: 500 },
    );
  }
}
