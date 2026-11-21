import {defineField, defineType} from 'sanity'

export const serviceCounty = defineType({
  name: 'serviceCounty',
  title: 'Service Area County',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'County Name',
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
        'Describe delivery and installation service available in this county.',
    }),
    defineField({
      name: 'image',
      title: 'County Page Image',
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
      subtitle: 'seo.slug.current',
    },
  },
})
