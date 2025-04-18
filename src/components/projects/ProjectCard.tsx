
import { Project } from '@/types/project';

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

export default ProjectCard;
