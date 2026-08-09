import {defineField, defineType} from 'sanity'

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ Item',
  type: 'object',
  fields: [
    defineField({
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
              {title: 'Underline', value: 'underline'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
      ],
      description: 'Detailed answer with rich text formatting support',
    }),
  ],
  preview: {
    select: {
      title: 'question',
      subtitle: 'answer',
    },
    prepare({title, subtitle}) {
      // Extract first block text from array
      const firstText = Array.isArray(subtitle)
        ? subtitle
            .filter((block: any) => block._type === 'block')
            .map((block: any) => block.children?.map((child: any) => child.text).join(''))
            .join(' ')
            .substring(0, 50)
        : ''

      return {
        title,
        subtitle: firstText ? `${firstText}...` : 'No answer yet',
      }
    },
  },
})
