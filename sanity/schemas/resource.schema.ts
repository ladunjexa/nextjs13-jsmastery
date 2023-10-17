import { filterOptions } from "@/constants";

const schema = {
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    {
      name: "association",
      title: "Association",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      require,
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      require,
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "bullets",
      title: "Bullets",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sequel",
      title: "Sequel",
      type: "reference",
      to: [{ type: "resource" }],
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "views",
      title: "Views",
      type: "number",
      initialValue: 0,
    },
    {
      name: "poster",
      title: "poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: filterOptions,
      },
    },
  ],
};

export default schema;
