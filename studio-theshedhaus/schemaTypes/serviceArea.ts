import {defineField, defineType} from 'sanity'

export const serviceArea = defineType({
  name: 'serviceArea',
  title: 'Service Area Town',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Town / Community Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO & URL',
      type: 'seo',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'county',
      title: 'County',
      type: 'reference',
      to: [{type: 'serviceCounty'}],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageDescription',
      title: 'Introduction',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
      description:
        'A short introduction shown below the page title.',
    }),
    defineField({
      name: 'body',
      title: 'Page Body',
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
      validation: (Rule) => Rule.required(),
      description:
        'Write useful, accurate town-specific information about delivery and installation.',
    }),
    defineField({
      name: 'image',
      title: 'Town Page Image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      county: 'county.name',
    },
    prepare({title, county}) {
      return {
        title: title || 'Service area',
        subtitle: county || 'No county selected',
      }
    },
  },
})
