import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const startup= defineType({
    name: "startup",
    title: "Startups",
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "title"
            }
        }),
        defineField({
            name: "author",
            type: "reference",
            to: { type: "author" },
        }),
        defineField({
            name: "views",
            type: "number",
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "category",
            type: "string",
            validation: (Rule) => Rule.min(3).max(20).required().error("Category is required"),
        }),
        defineField({
            name: "image",
            type: "url",
            validation: (Rule) => Rule.required().uri({ allowRelative: false, scheme: ["http", "https"] }).error("Image URL is required"),
        }),
        defineField({
            name: "pitch",
            type: "markdown",
        }),
    ],
})