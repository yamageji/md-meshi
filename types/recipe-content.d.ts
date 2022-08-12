import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface RecipeContent extends ParsedContent {
  title: string;
  photo: string;
  cookedDate: string;
  cookingTime: string;
  categories: string[];
  ingredients: string[];
  evaluation: number;
  diary: string;
}
