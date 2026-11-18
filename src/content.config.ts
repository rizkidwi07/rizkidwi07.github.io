import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    kind: z.enum(['Thesis', 'Funded community project', 'Course project', 'Team project', 'Capstone project', 'Bootcamp project']),
    category: z.enum(['NLP', 'Computer Vision', 'MLOps', 'Analytics', 'Machine Learning', 'Recommender Systems']),
    period: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    metric: z.object({ value: z.string(), label: z.string() }),
    order: z.number(),
    featured: z.boolean().default(false),
    links: z.object({
      github: z.string().url().optional(),
      demo: z.string().url().optional(),
      papers: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    }).default({ papers: [] }),
  }),
});

export const collections = { projects };
