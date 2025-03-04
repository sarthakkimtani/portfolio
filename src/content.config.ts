import { defineCollection, z } from "astro:content";

const hero = defineCollection({
  schema: z.object({
    location: z.string(),
    email: z.string(),
    currently: z.array(z.string()),
    previously: z.array(z.string()),
    intro: z.string(),
  }),
});

export const collections = { hero };
