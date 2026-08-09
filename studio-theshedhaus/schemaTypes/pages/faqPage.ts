import {defineField, defineType} from 'sanity'

export const faqPage = defineType({
  name: 'faqPage',
  title: 'FAQ Page',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageTitle',
      title: 'Page Title (Visible to Users)',
      type: 'string',
      description: 'Visible title shown on the page (separate from SEO title)',
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description (Visible to Users)',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
          },
        },
      ],
      description: 'Visible description shown on the page (separate from SEO description)',
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [{type: 'faqItem'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'FAQ',
        subtitle: subtitle || 'FAQ page SEO data',
      }
    },
  },
})
