
import { Project } from '@/types/project';

export const experimentsProjects: Project[] = [
  {
    id: 3,
    title: "Sonic Geometry Explorer",
    description: "Visual and auditory exploration of geometric relationships.",
    longDescription: "An interactive environment for exploring the connections between geometry, sound, and mathematical patterns through an immersive audio-visual experience.",
    categories: ['experiments', 'design'],
    technologies: ['Web Audio API', 'Three.js', 'Tone.js'],
    image: "/lovable-uploads/53310c6c-2ada-4dff-8ea2-28cbac3f4b1e.png",
    repoUrl: "https://github.com/e-schultz/sonic-geometry-explorer"
  },
  {
    id: 8,
    title: "Sacred Voxel Recursion",
    description: "3D voxel-based exploration of sacred geometry patterns.",
    longDescription: "A meditative tool for exploring sacred geometry through interactive 3D voxel-based representations and recursive patterns.",
    categories: ['experiments', 'design'],
    technologies: ['Three.js', 'WebGL', 'React'],
    image: "/lovable-uploads/23d00af8-973d-4d14-b1b6-43ce7416210b.png",
    repoUrl: "https://github.com/e-schultz/v0-sacred-voxel-recursion"
  }
];
