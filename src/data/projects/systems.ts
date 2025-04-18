
import { Project } from '@/types/project';

export const systemsProjects: Project[] = [
  {
    id: 1,
    title: "Floating Digital Grimoire",
    description: "A mystical digital compendium for organizing esoteric knowledge.",
    longDescription: "A digital grimoire system that combines traditional occult wisdom with modern information architecture, creating an interactive space for knowledge synthesis.",
    categories: ['systems', 'experiments'],
    technologies: ['React', 'TypeScript', 'Graph DB'],
    image: "/lovable-uploads/23d00af8-973d-4d14-b1b6-43ce7416210b.png",
    repoUrl: "https://github.com/e-schultz/floating-digital-grimoire"
  },
  {
    id: 2,
    title: "FLOAT PKM Ideas",
    description: "Personal Knowledge Management system with a recursive twist.",
    longDescription: "An experimental PKM system that explores non-linear note-taking and knowledge organization through recursive patterns and emergent structures.",
    categories: ['systems', 'experiments'],
    technologies: ['React', 'D3.js', 'IndexedDB'],
    image: "/lovable-uploads/cf7bdd20-95d2-457a-a35f-2ada8f0419e8.png",
    repoUrl: "https://github.com/e-schultz/float-pkm-ideas-v0-1"
  },
  {
    id: 5,
    title: "FLOAT Concept Explorer",
    description: "Visual tool for exploring and connecting abstract concepts.",
    longDescription: "An experimental interface for visualizing and manipulating abstract concepts in a spatial environment, enabling new ways of understanding complex relationships.",
    categories: ['systems', 'experiments'],
    technologies: ['React', 'Three.js', 'TypeScript'],
    image: "/lovable-uploads/4635d921-7941-43b6-9891-e890021ccfee.png",
    repoUrl: "https://github.com/e-schultz/v0-float-concept-explorer"
  }
];
