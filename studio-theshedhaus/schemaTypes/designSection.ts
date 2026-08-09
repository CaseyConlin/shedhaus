import {defineField, defineType} from 'sanity'

export const designOption = defineType({
  name: 'designOption',
  title: 'Design Option',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'Unique ID',
      type: 'string',
      description: 'Identifier for this option (e.g., "t1-11", "navajo")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name (for swatches)',
      type: 'string',
      description: 'Display name for swatch colors (e.g., "Navajo White")',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
      description: 'Secondary description',
    }),
    defineField({
      name: 'bullets',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of bullet points highlighting benefits',
    }),
    defineField({
      name: 'colors',
      title: 'Color Values',
      type: 'array',
      of: [{type: 'string'}],
      description: 'For swatches: hex colors. For images: leave empty',
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL',
      type: 'image',
      description: 'Featured image for this option',
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
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'imageUrl',
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

export const designSubsection = defineType({
  name: 'designSubsection',
  title: 'Design Subsection',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'Unique ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cardType',
      title: 'Card Display Type',
      type: 'string',
      description:
        'How to display items: swatch (colors), medium (horizontal), medium-portrait (vertical), medium-portrait-circle (circular image), or large (with text)',
      options: {
        list: [
          {title: 'Swatch Grid', value: 'swatch'},
          {title: 'Medium Cards (Horizontal)', value: 'medium'},
          {title: 'Medium Cards (Vertical Portrait)', value: 'medium-portrait'},
          {title: 'Swatch Cards (Vertical Circle)', value: 'swatch-portrait-circle'},
          {title: 'Large Cards', value: 'large'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Subsection Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Subsection Description',
      type: 'text',
      rows: 3,
      description: 'Optional introductory text for this subsection',
    }),
    defineField({
      name: 'includeInNav',
      title: 'Include in Navigation',
      type: 'boolean',
      description: 'Whether to show this subsection in the left navigation menu',
      initialValue: false,
    }),
    defineField({
      name: 'items',
      title: 'Options',
      type: 'array',
      of: [{type: 'designOption'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      cardType: 'cardType',
    },
    prepare({title, cardType}) {
      return {
        title: title || 'Untitled',
        subtitle: cardType ? `${cardType} cards` : '',
      }
    },
  },
})

export const designSection = defineType({
  name: 'designSection',
  title: 'Design Section',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'Unique ID',
      type: 'string',
      description: 'Identifier for navigation (e.g., "siding", "doors")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'navLabel',
      title: 'Navigation Label',
      type: 'string',
      description: 'Override label for navigation (if different from Section Title)',
    }),
    defineField({
      name: 'sectionDescription',
      title: 'Section Description',
      type: 'text',
      rows: 4,
      description: 'Introductory text about this design category',
    }),
    defineField({
      name: 'linksToShow',
      title: 'Links to Show in Nav',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Specific option titles to highlight in navigation (leave empty to show all)',
    }),
    defineField({
      name: 'subSections',
      title: 'Subsections',
      type: 'array',
      of: [{type: 'designSubsection'}],
    }),
  ],
  preview: {
    select: {
      title: 'sectionTitle',
    },
  },
})
