import {defineField, defineType} from 'sanity'

export const ourProcessPage = defineType({
  name: 'ourProcessPage',
  title: 'Our Process Page',
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
      name: 'steps',
      title: 'Process Steps',
      type: 'array',
      of: [{type: 'processStep'}],
      description: 'Steps are automatically sorted by their order number',
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
        title: title || 'Our Process',
        subtitle: subtitle || 'Process page SEO data',
      }
    },
  },
})
