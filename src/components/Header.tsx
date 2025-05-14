
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-neon border-opacity-30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary text-glow">FLOAT</Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:text-primary hover:bg-transparent"
              )}
            >
              Home
            </Link>
            <Link 
              to="/projects" 
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:text-primary hover:bg-transparent"
              )}
            >
              Projects
            </Link>
            <Link 
              to="/garden" 
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:text-primary hover:bg-transparent"
              )}
            >
              Garden
            </Link>
            <Link 
              to="/bridges" 
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:text-primary hover:bg-transparent"
              )}
            >
              Bridges
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                navigationMenuTriggerStyle(),
                "hover:text-primary hover:bg-transparent"
              )}
            >
              Contact
            </Link>
          </nav>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
