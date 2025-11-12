export const homePage = {
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'subtitle', type: 'text' },
      ],
    },
    {
      name: 'sportsSection',
      title: 'Sports Section',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string' },
        { name: 'subheadline', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'ctaText', type: 'string' },
      ],
    },
    {
      name: 'militarySection',
      title: 'Military Section',
      type: 'object',
      fields: [
        { name: 'headline', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'ctaText', type: 'string' },
      ],
    },
  ],
}

export const page = {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'content', type: 'array', of: [{ type: 'block' }] },
  ],
}

export const benefit = {
  name: 'benefit',
  title: 'Benefit',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'icon', type: 'image' },
    { name: 'description', type: 'text' },
  ],
}

export const team = {
  name: 'team',
  title: 'Team/Organization',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'logo', type: 'image' },
    { name: 'category', type: 'string', options: { list: ['NFL', 'NBA', 'Military', 'Other'] } },
  ],
}

export const schemaTypes = [homePage, page, benefit, team]
