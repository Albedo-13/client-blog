import { Category } from "./categories";

export type BlogPost = {
  id: number;
  title: string;
  description: string;
  content: string;
  image: string;
  date: string;
  category: Category;
  author: string;
  authorImage: string;
};
