import { hackathon_assad } from "@/lib/db/schema/script";
import { db } from "@/lib/db/drizzle";
import { sql, eq, asc, and } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body = await request.json();
  const userId = request.headers.get("authorization");
  if (body && userId) {
    const cartItem = {
      product_name: body.product_name,
      product_id: body.product_id,
      product_type: body.product_type,
      product_price: body.product_price,
      product_image_url: body.product_image_url,
      product_size: body.product_size,
      product_quantity: body.product_quantity,
      user_id: userId,
    };
    try {
      const response = await db
        .insert(hackathon_assad)
        .values(cartItem)
        .onConflictDoUpdate({
          target: [
            hackathon_assad.user_id,
            hackathon_assad.product_name,
            hackathon_assad.product_price,
            hackathon_assad.product_size,
          ],
          set: {
            product_quantity: sql`${cartItem.product_quantity} + hackathon_assad.product_quantity`,
          },
        })
        .returning();
      return NextResponse.json(response, {
        status: 201,
      });
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 500,
        }
      );
    }
  } else {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}

export async function GET(request: NextRequest) {
  const userId = request.headers.get("authorization");
  if (userId) {
    try {
      const response = await db
        .select()
        .from(hackathon_assad)
        .where(eq(hackathon_assad.user_id, userId)) // equal expression in words
        .orderBy(
          asc(hackathon_assad.product_name),
          asc(hackathon_assad.product_size)
        );
      return NextResponse.json(response, {
        status: 200,
      });

    } catch (error) {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 500,
        }
      );
    }
  } else {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const userId = request.headers.get("authorization");
  const cartId = Number(request.headers.get("cartId"));
  if (userId && cartId) {
    try {
      await db
        .delete(hackathon_assad)
        .where(
          and(
            eq(hackathon_assad.cart_id, cartId),
            eq(hackathon_assad.user_id, userId)
          )
        );
      return NextResponse.json({ response: "success" }, { status: 200 });
    } catch (error) {
      return NextResponse.json({ response: "failed" }, { status: 500 });
    }
  } else {
    return NextResponse.json({ response: "failed" }, { status: 500 });
  }
}


export async function PATCH(request: NextRequest) {
  const userId = request.headers.get("authorization");
  if (userId) {
    const user_id = userId;
    try {
      const result = await db
        .select({
          price: sql<number>`sum("hackathon_assad".product_quantity * "hackathon_assad".product_price)`,
          quant: sql<number>`sum("hackathon_assad".product_quantity)`,
        })
        .from(hackathon_assad)
        .where(eq(hackathon_assad.user_id, user_id));
      return NextResponse.json(result, { status: 200 });
    } catch (error) {
      return NextResponse.json([{ price: 0, quant: 0 }], { status: 500 });
    }
  } else {
    return NextResponse.json([{ price: 0, quant: 0 }], { status: 200 });
  }
}