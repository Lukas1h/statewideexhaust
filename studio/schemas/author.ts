// schemas/author.ts
import { SchemaType, Rule } from '@sanity/types';

const author: SchemaType = {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
        name: 'badge',
        title: 'Badge',
        type: 'text',
      },
  ],
};

export default author;
