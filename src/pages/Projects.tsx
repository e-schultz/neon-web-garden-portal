
import { useState } from 'react';
import Layout from '../components/Layout';
import ProjectFilters from '@/components/projects/ProjectFilters';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects, getProjectsByCategory } from '@/data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredProjects = getProjectsByCategory(activeFilter);

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
            
            <ProjectFilters 
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
            
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

export default Projects;
