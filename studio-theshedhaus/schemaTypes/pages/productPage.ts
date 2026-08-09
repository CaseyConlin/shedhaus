import {defineField, defineType} from 'sanity'

export const productPage = defineType({
  name: 'productPage',
  title: 'Product (Signature Style)',
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
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      description: 'e.g., "A-Frame Shed", "Cottage Style"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Product Gallery',
      type: 'array',
      of: [{type: 'galleryImage'}],
      description: 'Images sorted by order number',
    }),
    defineField({
      name: 'specs',
      title: 'Specifications',
      type: 'array',
      of: [{type: 'spec'}],
      description: 'Product specs like roofline, doors, windows, etc.',
    }),
    defineField({
      name: 'features',
      title: 'Key Features',
      type: 'array',
      of: [{type: 'productFeature'}],
      description: 'Highlight 3-5 key features',
    }),
  ],
  preview: {
    select: {
      title: 'productName',
      subtitle: 'seo.title',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Product',
        subtitle: subtitle || 'Product page',
      }
    },
  },
})
