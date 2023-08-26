import { db } from "@/lib/db/drizzle";
import { hackathon_assad } from "@/lib/db/schema/script";
import { eq, sql } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const userId = request.headers.get("authorization");
  if (userId) {
    const user_id = userId;
    try {
      const result = await db
        .select({
          numItems: hackathon_assad.product_quantity,
        })
        .from(hackathon_assad)
        .where(eq(hackathon_assad.user_id, user_id));
      let num = 0;
      if (result.length > 0) {
        result.map((r) => {
          num = num + r.numItems;
        });
      }
      return NextResponse.json([{ numItems: num }], { status: 200 });
    } catch (error) {
      return NextResponse.json([{ numItems: 0 }], { status: 500 });
    }
  } else {
    return NextResponse.json([{ numItems: 0 }], { status: 500 });
  }
}
