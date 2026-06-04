import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const cv = defineCollection({
	// Load Markdown and MDX files in the `src/content/cv` directory.
	loader: glob({ base: './src/content/cv', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: () =>
		z.object({
			title: z.string(),
			socialLinks: z.array(z.string()).default([]).optional(),
      contact: z.string(),
      location: z.string(),
			// Transform string to Date object
			// pubDate: z.coerce.date(),
			// updatedDate: z.coerce.date().optional(),
		}),
});

export const collections = { cv };
