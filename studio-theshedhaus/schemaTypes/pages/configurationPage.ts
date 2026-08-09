import {defineField, defineType} from 'sanity'

export const configurationPage = defineType({
  name: 'configurationPage',
  title: 'Configuration Page',
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
      name: 'sections',
      title: 'Design Sections',
      type: 'array',
      of: [{type: 'designSection'}],
      description: 'Customization sections (siding, doors, colors, etc.)',
    }),
  ],
  preview: {
    select: {
      title: 'seo.title',
      subtitle: 'seo.description',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Configuration',
        subtitle: subtitle || 'Configuration page',
      }
    },
  },
})
