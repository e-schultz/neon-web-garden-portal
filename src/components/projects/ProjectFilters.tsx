
import { Filter, Terminal, Code, Database, PencilRuler, Braces } from 'lucide-react';

export const filters = [
  { id: 'all', name: 'All Projects', icon: <Terminal className="w-4 h-4" /> },
  { id: 'web', name: 'Web Development', icon: <Code className="w-4 h-4" /> },
  { id: 'systems', name: 'System Design', icon: <Database className="w-4 h-4" /> },
  { id: 'design', name: 'UX/UI Design', icon: <PencilRuler className="w-4 h-4" /> },
  { id: 'experiments', name: 'Experiments', icon: <Braces className="w-4 h-4" /> },
];

interface ProjectFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const ProjectFilters = ({ activeFilter, onFilterChange }: ProjectFiltersProps) => {
  return (
    <div className="mb-10">
      <div className="flex items-center space-x-2 text-sm mb-4">
        <Filter className="w-4 h-4 text-neon" />
        <span className="text-neon">Filter by:</span>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
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
  );
};

export default ProjectFilters;
