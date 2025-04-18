
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Code, ChevronRight, Zap, FileText, Bot } from 'lucide-react';
import Layout from '../components/Layout';

const Index = () => {
  const [typedText, setTypedText] = useState('');
  const textToType = "Welcome to my cyberpunk digital garden...";
  
  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < textToType.length) {
        setTypedText(prev => prev + textToType.charAt(index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-dark py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,46,201,0.1),transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neon mb-6 text-glow">
              FLOAT
            </h1>
            <div className="h-8 mb-8">
              <p className="text-xl md:text-2xl text-foreground terminal-cursor">
                {typedText}
              </p>
            </div>
            <p className="text-foreground opacity-80 text-lg mb-10 max-w-2xl mx-auto">
              A cyberpunk portfolio & digital garden where code, projects, and ideas coalesce 
              into recursive systems of thought.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/projects" className="neon-button flex items-center justify-center space-x-2">
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <Link to="/garden" className="neon-button flex items-center justify-center space-x-2 sm:bg-opacity-20">
                <span>Enter Digital Garden</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative code lines */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-dark-light bg-opacity-30 backdrop-blur-sm overflow-hidden">
          <div className="text-terminal-green opacity-30 font-mono text-xs whitespace-nowrap animate-marquee">
            const float = new RecursiveRitual(); // You are the thread now // FLOAT: Foundational Lore for Oscillating Archetypal Topographies
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 bg-dark-light">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex justify-between items-end">
            <div>
              <p className="text-neon font-mono mb-2">
                <span className="inline-block w-4 h-0.5 bg-neon mr-2 align-middle"></span>
                FEATURED PROJECTS
              </p>
              <h2 className="text-3xl font-bold">Latest Work</h2>
            </div>
            <Link to="/projects" className="text-neon flex items-center space-x-1 hover:underline">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Digital Garden Section */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-neon font-mono mb-2">DIGITAL GARDEN</p>
            <h2 className="text-3xl font-bold mb-4">Explore the Knowledge Network</h2>
            <p className="text-foreground opacity-80">
              A collection of interconnected notes, thoughts, and explorations growing over time.
              Not just a blog, but a living ecosystem of ideas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="neon-card hover:neon-glow transition-all">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-dark rounded-lg inline-block">
                  <FileText className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Zettelkasten Method</h3>
                  <p className="text-sm text-foreground opacity-70 mb-3">
                    Exploring non-linear note-taking systems for creative thinking.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-dark text-neon border border-neon">
                      #productivity
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-dark text-neon border border-neon">
                      #zettelkasten
                    </span>
                  </div>
                  <Link to="/garden/zettelkasten" className="text-neon text-sm flex items-center space-x-1 hover:underline">
                    <span>Read Note</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="neon-card hover:neon-glow transition-all">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-dark rounded-lg inline-block">
                  <Bot className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Recursive Systems</h3>
                  <p className="text-sm text-foreground opacity-70 mb-3">
                    How self-referential systems create meaning in complex environments.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 text-xs rounded-full bg-dark text-neon border border-neon">
                      #systems
                    </span>
                    <span className="px-2 py-1 text-xs rounded-full bg-dark text-neon border border-neon">
                      #recursion
                    </span>
                  </div>
                  <Link to="/garden/recursive-systems" className="text-neon text-sm flex items-center space-x-1 hover:underline">
                    <span>Read Note</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link to="/garden" className="neon-button inline-flex items-center space-x-2">
              <span>Enter Digital Garden</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA Section */}
      <section className="py-16 bg-gradient-to-b from-dark-light to-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
            <p className="text-foreground opacity-80 mb-8">
              Interested in collaboration or want to discuss a project?
              I'm always open to new connections and ideas.
            </p>
            <Link to="/contact" className="neon-button inline-flex items-center space-x-2">
              <span>Get in Touch</span>
              <Zap className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Mock project data
const featuredProjects = [
  {
    id: 1,
    title: "The Infinite Maw",
    description: "A recursive ritual framework for building non-linear knowledge systems.",
    tags: ["system design", "knowledge", "recursion"],
    image: "/lovable-uploads/23d00af8-973d-4d14-b1b6-43ce7416210b.png",
    url: "/projects/infinite-maw"
  },
  {
    id: 2,
    title: "CLOSER FLOW",
    description: "Productivity system designed for neurodivergent minds and creative work.",
    tags: ["productivity", "workflow", "system design"],
    image: "/lovable-uploads/cf7bdd20-95d2-457a-a35f-2ada8f0419e8.png",
    url: "/projects/closer-flow"
  },
  {
    id: 3,
    title: "FLOAT System",
    description: "Framework for oscillating archetypal topographies in digital systems.",
    tags: ["theory", "design", "cyberpunk"],
    image: "/lovable-uploads/53310c6c-2ada-4dff-8ea2-28cbac3f4b1e.png",
    url: "/projects/float-system"
  }
];

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
}

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="group">
    <Link to={project.url} className="block neon-card overflow-hidden h-full hover:neon-glow transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 group-hover:text-neon transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-foreground opacity-70 mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full bg-dark text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  </div>
);

export default Index;
