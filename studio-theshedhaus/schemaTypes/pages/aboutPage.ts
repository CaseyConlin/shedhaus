import {defineField, defineType} from 'sanity'

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About Page',
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
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [{type: 'teamMember'}],
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
        title: title || 'About',
        subtitle: subtitle || 'About page SEO data',
      }
    },
  },
})
