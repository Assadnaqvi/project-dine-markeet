import { hackathon_assad } from "@/lib/db/schema/script";
import { InferModel } from "drizzle-orm";


export type CartItem = InferModel<typeof hackathon_assad>; // return type when queried
export type NewCartItem = InferModel<typeof hackathon_assad, "insert">; // insert type