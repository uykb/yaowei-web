import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['pe', 'pet', 'cap', 'pp', 'new']),
    description: z.string(),
    image: z.string().optional(),
    specifications: z.record(z.string()).optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['技术文章', '公司新闻', '行业动态', '展会信息']),
    excerpt: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { products, news };
