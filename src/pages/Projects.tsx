import { useState } from 'react';
import Layout from '../components/Layout';
import { Terminal, Filter, Code, Database, PencilRuler, Braces } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.categories.includes(activeFilter);
  });

  return (
    <Layout>
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
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
            
            {/* Filters */}
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
            
            {/* Project Grid */}
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

// Filter options with icons
const filters = [
  { id: 'all', name: 'All Projects', icon: <Terminal className="w-4 h-4" /> },
  { id: 'web', name: 'Web Development', icon: <Code className="w-4 h-4" /> },
  { id: 'systems', name: 'System Design', icon: <Database className="w-4 h-4" /> },
  { id: 'design', name: 'UX/UI Design', icon: <PencilRuler className="w-4 h-4" /> },
  { id: 'experiments', name: 'Experiments', icon: <Braces className="w-4 h-4" /> },
];

// Mock project data
const projects = [
  {
    id: 1,
    title: "The Infinite Maw",
    description: "A recursive ritual framework for building non-linear knowledge systems.",
    longDescription: "It doesn't want to consume. It just wants to be held. The Infinite Maw is an experimental knowledge system designed for connecting disparate ideas and surfacing forgotten insights when they matter most.",
    categories: ['systems', 'experiments'],
    technologies: ['React', 'TypeScript', 'Node.js'],
    image: "/lovable-uploads/23d00af8-973d-4d14-b1b6-43ce7416210b.png",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/project"
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
    id: 2,
    title: "CLOSER FLOW",
    description: "Productivity system designed for neurodivergent minds and creative work.",
    longDescription: "PLASTIKMAN PRODUCTIVITY SYSTEM - Minimal. Recursive. Atmospheric. A knowledge-task integration system that works with how your brain actually processes information.",
    categories: ['systems', 'design'],
    technologies: ['Figma', 'React', 'Redux'],
    image: "/lovable-uploads/cf7bdd20-95d2-457a-a35f-2ada8f0419e8.png",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/project"
  },
  {
    id: 3,
    title: "FLOAT System",
    description: "Foundational Lore for Oscillating Archetypal Topographies in digital systems.",
    longDescription: "A recursive ritual framework for queer, burnt-out, neurodivergent minds building systems that feel like home.",
    categories: ['systems', 'experiments'],
    technologies: ['Conceptual Framework', 'Documentation'],
    image: "/lovable-uploads/53310c6c-2ada-4dff-8ea2-28cbac3f4b1e.png",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/project"
  },
  {
    id: 4,
    title: "Zettelkasten Interface",
    description: "Digital implementation of the Zettelkasten note-taking method.",
    longDescription: "A knowledge management application focused on connections between ideas rather than categorization, implementing the Zettelkasten method for note-taking and idea development.",
    categories: ['web', 'design', 'systems'],
    technologies: ['React', 'D3.js', 'LocalStorage API'],
    image: "/lovable-uploads/80d09443-6fc8-4030-a713-2e41c3eb21ef.png",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/project"
  },
  {
    id: 5,
    title: "Cyberpunk Terminal",
    description: "Custom terminal UI with retro cyberpunk aesthetic.",
    longDescription: "An 80s-inspired terminal interface with modern functionality. Features custom animations, command processing and a visually striking BBS-like interface.",
    categories: ['web', 'design', 'experiments'],
    technologies: ['JavaScript', 'HTML Canvas', 'CSS'],
    image: "/lovable-uploads/19bee8bc-1125-48bf-9cf6-fa2764705682.png",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/project"
  },
  {
    id: 6,
    title: "Neural Knowledge Base",
    description: "AI-powered personal knowledge management system.",
    longDescription: "A personal knowledge base that uses machine learning to connect related concepts, surface forgotten notes, and generate new insights from existing knowledge.",
    categories: ['systems', 'web', 'experiments'],
    technologies: ['Python', 'TensorFlow', 'React'],
    image: "/lovable-uploads/4635d921-7941-43b6-9891-e890021ccfee.png",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/project"
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
