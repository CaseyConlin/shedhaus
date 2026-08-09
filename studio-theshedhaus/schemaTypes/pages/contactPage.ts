import {defineField, defineType} from 'sanity'

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact Page',
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
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
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
    }),
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Contact',
        subtitle: subtitle || 'Contact page',
      }
    },
  },
})
