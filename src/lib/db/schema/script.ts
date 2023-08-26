import { pgTable, serial, text, integer, unique } from "drizzle-orm/pg-core";
export const hackathon_assad = pgTable(
  "hackathon_assad",
  {
    cart_id: serial("cart_id").primaryKey(),
    user_id: text("user_id").default(""),
    product_name: text("product_name").default(""),
    product_id: text("product_id").default(""),
    product_type: text("product_type").default(""),
    product_image_url: text("product_image_url").default(""),
    product_size: text("product_size").default(""),
    product_quantity: integer("product_quantity").notNull().default(0),
    product_price: integer("product_price").default(0),
  },
  (t) => ({
    unq: unique("dmunique").on(
      t.user_id,
      t.product_name,
      t.product_size,
      t.product_price
    ),
  })
);
