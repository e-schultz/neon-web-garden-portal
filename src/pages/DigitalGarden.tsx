
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Search, Hash, FileText, Link as LinkIcon, Calendar } from 'lucide-react';

const DigitalGarden = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  // Filter notes based on search term and active tag
  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         note.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = activeTag ? note.tags.includes(activeTag) : true;
    
    return matchesSearch && matchesTag;
  });

  // Get unique tags from all notes
  const allTags = Array.from(
    new Set(
      notes.flatMap(note => note.tags)
    )
  ).sort();

  return (
    <Layout>
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-2">Digital Garden</h1>
              <p className="text-foreground opacity-70 max-w-2xl">
                A collection of interconnected notes, thoughts, and explorations. 
                Unlike a traditional blog, this is a space where ideas grow and evolve over time.
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="mb-10 flex flex-col md:flex-row gap-6">
              {/* Search */}
              <div className="w-full md:w-1/2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground opacity-50 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search notes..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full py-3 pl-10 pr-4 bg-dark-light border border-neon border-opacity-30 rounded-md focus:border-neon focus:outline-none focus:neon-glow"
                  />
                </div>
              </div>
              
              {/* Tags filter */}
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="flex items-center text-xs uppercase font-semibold text-foreground opacity-70 mb-2">
                  <Hash className="w-3 h-3 mr-1" /> Filter by tag
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveTag(null)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      activeTag === null
                        ? 'bg-neon text-black'
                        : 'bg-dark-light text-foreground hover:bg-dark-light/70'
                    }`}
                  >
                    All
                  </button>
                  
                  {allTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(tag)}
                      className={`px-3 py-1 text-xs rounded-full transition-colors ${
                        activeTag === tag
                          ? 'bg-neon text-black'
                          : 'bg-dark-light text-foreground hover:bg-dark-light/70'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredNotes.length > 0 ? (
                filteredNotes.map((note) => (
                  <NoteCard key={note.slug} note={note} />
                ))
              ) : (
                <div className="col-span-2 py-12 text-center">
                  <p className="text-foreground opacity-70">
                    No notes found matching your search criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface Note {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  tags: string[];
  connections: string[];
}

const notes: Note[] = [
  {
    title: "Zettelkasten Method",
    slug: "zettelkasten-method",
    excerpt: "The key to effective note-taking is to focus on connections between ideas rather than categorization. This is why zettelkasten works so well.",
    date: "2023-05-17",
    tags: ["productivity", "zettelkasten", "note-taking"],
    connections: ["recursive-systems", "digital-gardens"]
  },
  {
    title: "Recursive Systems",
    slug: "recursive-systems",
    excerpt: "How self-referential systems create meaning in complex environments. Exploring the foundations of recursive thinking.",
    date: "2023-06-02",
    tags: ["systems", "recursion", "complexity"],
    connections: ["zettelkasten-method", "float-concept"]
  },
  {
    title: "Digital Gardens",
    slug: "digital-gardens",
    excerpt: "Digital gardens are non-linear, constantly evolving collections of ideas, different from traditional blogs or wikis.",
    date: "2023-04-12",
    tags: ["digital-gardens", "web", "knowledge-management"],
    connections: ["zettelkasten-method"]
  },
  {
    title: "FLOAT Concept",
    slug: "float-concept",
    excerpt: "FLOAT: Foundational Lore for Oscillating Archetypal Topographies. A conceptual framework for systems design.",
    date: "2023-07-08",
    tags: ["float", "systems", "design"],
    connections: ["recursive-systems"]
  },
  {
    title: "Cyberpunk Aesthetics in Web Design",
    slug: "cyberpunk-aesthetics",
    excerpt: "Exploring the influence of 80s cyberpunk visual language in contemporary web design. Neon, noir, and technological dystopia.",
    date: "2023-05-30",
    tags: ["design", "cyberpunk", "aesthetics"],
    connections: ["float-concept"]
  },
  {
    title: "Terminal Interfaces for Modern Applications",
    slug: "terminal-interfaces",
    excerpt: "Retro-futuristic terminal interfaces create unique user experiences while retaining modern functionality.",
    date: "2023-04-21",
    tags: ["design", "ui", "terminal"],
    connections: ["cyberpunk-aesthetics"]
  }
];

const NoteCard = ({ note }: { note: Note }) => {
  return (
    <div className="neon-card hover:neon-glow transition-all h-full">
      <div className="p-5">
        <Link to={`/garden/${note.slug}`} className="block">
          <h3 className="text-xl font-bold mb-2 hover:text-neon transition-colors">
            {note.title}
          </h3>
        </Link>
        
        <p className="text-foreground opacity-80 text-sm mb-4">
          {note.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {note.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs rounded-full bg-dark text-neon border border-neon border-opacity-30"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {note.connections.length > 0 && (
          <div className="mb-4">
            <h4 className="flex items-center text-xs uppercase font-semibold text-foreground opacity-70 mb-2">
              <LinkIcon className="w-3 h-3 mr-1" /> Connected Notes
            </h4>
            <div className="flex flex-wrap gap-2">
              {note.connections.map((connection, index) => {
                // Find the connected note by slug
                const connectedNote = notes.find(n => n.slug === connection);
                return connectedNote ? (
                  <Link 
                    key={index}
                    to={`/garden/${connection}`}
                    className="px-2 py-1 text-xs rounded-full bg-dark-light text-foreground hover:bg-neon hover:text-black transition-colors"
                  >
                    {connectedNote.title}
                  </Link>
                ) : null;
              })}
            </div>
          </div>
        )}
        
        <div className="flex items-center text-xs text-foreground opacity-50 mt-4">
          <Calendar className="w-3 h-3 mr-1" />
          <span>Last updated: {note.date}</span>
        </div>
      </div>
    </div>
  );
};

export default DigitalGarden;
