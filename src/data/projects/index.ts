
import { Project } from '@/types/project';
import { webProjects } from './web';
import { systemsProjects } from './systems';
import { experimentsProjects } from './experiments';
import { designProjects } from './design';

// Merge all projects and deduplicate
const allProjectsWithDuplicates = [
  ...webProjects,
  ...systemsProjects,
  ...experimentsProjects,
  ...designProjects
];

// Remove duplicates based on project ID
export const projects: Project[] = Array.from(
  new Map(allProjectsWithDuplicates.map(project => [project.id, project]))
).map(([_, project]) => project);

// Filter functions for easy access to specific categories
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.categories.includes(category));
};

export {
  webProjects,
  systemsProjects,
  experimentsProjects,
  designProjects
};
