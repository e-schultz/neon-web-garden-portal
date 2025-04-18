import { useState } from 'react';
import Layout from '../components/Layout';
import { Terminal, Filter, Code, Database, PencilRuler, Braces } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <Layout>
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-between items-end mb-12">
              <div>
                <h1 className="text-4xl font-bold mb-2">Projects</h1>
                <p className="text-foreground opacity-70">
                  A collection of experiments, products, and digital artifacts.
                </p>
              </div>
              <div className="code-block text-xs mt-4 md:mt-0 hidden md:block">
                <pre className="text-terminal-green">
                  <span className="text-neon-light">const</span> projects = <span className="text-neon-light">await</span> portfolio.fetchAll();
                </pre>
              </div>
            </div>
            
            <div className="mb-10">
              <div className="flex items-center space-x-2 text-sm mb-4">
                <Filter className="w-4 h-4 text-neon" />
                <span className="text-neon">Filter by:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeFilter === filter.id 
                        ? 'bg-neon text-black' 
                        : 'bg-dark-light hover:bg-dark-light/70 text-foreground'
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {filter.icon}
                      <span>{filter.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const filters = [
  { id: 'all', name: 'All Projects', icon: <Terminal className="w-4 h-4" /> },
  { id: 'web', name: 'Web Development', icon: <Code className="w-4 h-4" /> },
  { id: 'systems', name: 'System Design', icon: <Database className="w-4 h-4" /> },
  { id: 'design', name: 'UX/UI Design', icon: <PencilRuler className="w-4 h-4" /> },
  { id: 'experiments', name: 'Experiments', icon: <Braces className="w-4 h-4" /> },
];

const projects = [
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
    id: 5,
    title: "FLOAT Concept Explorer",
    description: "Visual tool for exploring and connecting abstract concepts.",
    longDescription: "An experimental interface for visualizing and manipulating abstract concepts in a spatial environment, enabling new ways of understanding complex relationships.",
    categories: ['systems', 'experiments'],
    technologies: ['React', 'Three.js', 'TypeScript'],
    image: "/lovable-uploads/4635d921-7941-43b6-9891-e890021ccfee.png",
    repoUrl: "https://github.com/e-schultz/v0-float-concept-explorer"
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

interface Project {
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

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="neon-card overflow-hidden hover:neon-glow transition-all group">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-neon transition-colors">
          {project.title}
        </h3>
        
        <p className="text-foreground opacity-80 text-sm mb-4">
          {project.longDescription}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.categories.map((category, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-dark text-neon border border-neon border-opacity-30"
            >
              {category}
            </span>
          ))}
        </div>
        
        <div className="mb-4">
          <h4 className="text-xs uppercase font-semibold text-foreground opacity-70 mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-dark-light text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex space-x-4 mt-4">
          {project.demoUrl && (
            <a 
              href={project.demoUrl}
              className="px-3 py-2 text-sm border border-neon text-neon rounded hover:bg-neon hover:bg-opacity-20 transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Demo
            </a>
          )}
          
          {project.repoUrl && (
            <a 
              href={project.repoUrl}
              className="px-3 py-2 text-sm border border-foreground border-opacity-30 text-foreground rounded hover:border-neon hover:text-neon transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
