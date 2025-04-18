
import { Project } from '@/types/project';

export const webProjects: Project[] = [
  {
    id: 4,
    title: "Ghost Thread Experience",
    description: "Thread-based digital art and knowledge exploration interface.",
    longDescription: "A unique interface for exploring interconnected thoughts and digital artifacts through an ethereal thread-based visualization system.",
    categories: ['web', 'design'],
    technologies: ['React', 'SVG', 'WebGL'],
    image: "/lovable-uploads/80d09443-6fc8-4030-a713-2e41c3eb21ef.png",
    repoUrl: "https://github.com/e-schultz/ghost-thread-experience"
  },
  {
    id: 6,
    title: "Pulsating Dreamscape",
    description: "Generative art system creating dynamic visual landscapes.",
    longDescription: "A generative art system that creates evolving visual landscapes using algorithmic patterns and user interaction.",
    categories: ['web', 'design', 'experiments'],
    technologies: ['Canvas API', 'WebGL', 'p5.js'],
    image: "/lovable-uploads/19bee8bc-1125-48bf-9cf6-fa2764705682.png",
    repoUrl: "https://github.com/e-schultz/pulsating-dreamscape"
  },
  {
    id: 7,
    title: "FLOAT Zine Experiments",
    description: "Digital zine experiments exploring interactive storytelling and recursive systems.",
    longDescription: "A collection of digital zine experiments that explore the intersection of interactive storytelling, recursive systems, and digital gardens. Built with web technologies to create immersive reading experiences.",
    categories: ['web', 'experiments', 'design'],
    technologies: ['Web Components', 'JavaScript', 'CSS'],
    image: "/lovable-uploads/19bee8bc-1125-48bf-9cf6-fa2764705682.png",
    demoUrl: "https://float-zine-experiments.netlify.app/",
    repoUrl: "https://github.com/e-schultz/v0-float-zine-experiments"
  }
];
