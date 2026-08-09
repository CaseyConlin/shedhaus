import {defineField, defineType} from 'sanity'

export const spec = defineType({
  name: 'spec',
  title: 'Product Specification',
  type: 'object',
  fields: [
    defineField({
      name: 'lead',
      title: 'Label (e.g., "Roofline")',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Value/Description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      lead: 'lead',
      text: 'text',
    },
    prepare({lead, text}) {
      return {
        title: lead,
        subtitle: text?.substring(0, 50),
      }
    },
  },
})

export const productFeature = defineType({
  name: 'productFeature',
  title: 'Product Feature',
  type: 'object',
  fields: [
    defineField({
      name: 'lead',
      title: 'Feature Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Feature Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      lead: 'lead',
      text: 'text',
    },
    prepare({lead, text}) {
      return {
        title: lead,
        subtitle: text?.substring(0, 50) + '...',
      }
    },
  },
})

export const galleryImage = defineType({
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      media: 'image',
      order: 'order',
    },
    prepare({media, order}) {
      return {
        title: `Image ${order || ''}`,
        media,
      }
    },
  },
})
