CREATE TABLE IF NOT EXISTS "hackathon_assad" (
	"cart_id" serial PRIMARY KEY NOT NULL,
	"user_id" text DEFAULT '',
	"product_name" text DEFAULT '',
	"product_id" text DEFAULT '',
	"product_type" text DEFAULT '',
	"product_image_url" text DEFAULT '',
	"product_size" text DEFAULT '',
	"product_quantity" integer DEFAULT 0 NOT NULL,
	"product_price" integer DEFAULT 0,
	CONSTRAINT "dmunique" UNIQUE("user_id","product_name","product_size","product_price")
);
