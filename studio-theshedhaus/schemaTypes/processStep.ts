import {defineField, defineType} from 'sanity'

export const processStep = defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Step Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Step Description',
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
      description: 'Detailed description of this process step. Supports rich text formatting.',
    }),
    defineField({
      name: 'icon',
      title: 'Icon/Image',
      type: 'image',
      description: 'Visual icon for this step (recommended: 60x60px or SVG)',
      options: {
        hotspot: false,
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
      description: 'Steps are sorted by this number (ascending)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      order: 'order',
      media: 'icon',
    },
    prepare({title, order, media}) {
      return {
        title: `${order ? order + '. ' : ''}${title}`,
        media,
      }
    },
  },
})
