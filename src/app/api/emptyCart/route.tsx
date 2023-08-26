import { db } from "@/lib/db/drizzle";
import { hackathon_assad } from "@/lib/db/schema/script";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const userId = request.headers.get("authorization");

  if (userId) {
    try {
      await db.delete(hackathon_assad);
      return NextResponse.json({ response: "success" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ response: "failed" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ response: "failed" }, { status: 500 });
  }
}
