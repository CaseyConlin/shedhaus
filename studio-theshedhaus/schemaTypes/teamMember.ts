import {defineField, defineType} from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      description: 'Headshot or professional photo. Recommended: square format',
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
      name: 'details',
      title: 'Details (Lead + Description Pairs)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'detail',
          fields: [
            {
              name: 'leadText',
              type: 'string',
              title: 'Label (e.g., "Expertise")',
            },
            {
              name: 'bodyText',
              type: 'text',
              rows: 3,
              title: 'Description',
            },
          ],
          preview: {
            select: {
              leadText: 'leadText',
              bodyText: 'bodyText',
            },
            prepare({leadText, bodyText}) {
              return {
                title: leadText,
                subtitle: bodyText?.substring(0, 50) + '...' || 'No description',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image',
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle,
        media,
      }
    },
  },
})
