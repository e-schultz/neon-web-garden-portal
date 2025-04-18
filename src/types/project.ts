
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  categories: string[];
  technologies: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
}
