import { defineCollection, z } from 'astro:content';

const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
    img_alt: z.string().optional(),
    link_to: z.string().url(), 
  }),
});

export const collections = {
  work: workCollection,
};