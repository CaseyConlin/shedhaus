import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO & Metadata',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title (SEO)',
      type: 'string',
      description: 'Appears in browser tab and search results. Max 60 characters.',
      validation: (Rule) =>
        Rule.max(60).warning('Title should be under 60 characters for search engines'),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
      description: 'Brief summary for search results. Max 160 characters.',
      validation: (Rule) => Rule.max(160).warning('Description should be under 160 characters'),
    }),
    defineField({
      name: 'socialImage',
      title: 'Social Media Image',
      type: 'image',
      description: 'Image for social media preview (Open Graph). Recommended: 1200x630px',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Important for accessibility and SEO',
        },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Unique identifier for this page URL',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Untitled SEO',
        subtitle: subtitle?.substring(0, 50) + '...' || 'No description',
      }
    },
  },
})
