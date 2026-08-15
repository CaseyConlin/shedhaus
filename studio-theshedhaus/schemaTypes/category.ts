import {defineType, defineField} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., sheds, playhouses, garages, cottages',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'pageTitle',
      title: 'Page Title (Hero Section)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Displayed prominently on the category page',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Introductory text shown below the page title',
    }),
    defineField({
      name: 'image',
      title: 'Category Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'pageTitle',
    },
  },
})
