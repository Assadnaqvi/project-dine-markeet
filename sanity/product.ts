import { defineField } from "sanity";
export const product = {
  name: "product",
  type: "document",
  title: "Product",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "product description",
      type: "string",
    },
    {
      name: "price",
      title: "Product Price",
      type: "number",
    },
    {
      name: "image",
      title: "product image",
      type: "image",
    },
    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
};
