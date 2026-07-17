import {defineField, defineType} from 'sanity'

export const priceListType = defineType({
  name: 'priceList',
  title: 'Price List',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Price List',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'Price List PDF',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
})
