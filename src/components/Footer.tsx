
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-neon border-opacity-30">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-neon font-mono">
              <span className="text-glow">&lt;/&gt;</span> FLOAT <span className="text-foreground text-opacity-50">v1.0</span>
            </p>
            <p className="text-sm text-foreground text-opacity-70 mt-1">
              Built with <span className="text-neon">█</span> in the digital void
            </p>
          </div>
          
          <div className="flex space-x-4">
            <SocialLink href="https://github.com" icon={<Github />} label="GitHub" />
            <SocialLink href="https://twitter.com" icon={<Twitter />} label="Twitter" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:hello@example.com" icon={<Mail />} label="Email" />
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-white border-opacity-10 flex flex-col md:flex-row justify-between items-center text-sm text-foreground text-opacity-50">
          <p>© {new Date().getFullYear()} FLOAT. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-neon transition-colors">Privacy</a>
            <a href="#" className="hover:text-neon transition-colors">Terms</a>
            <a href="#" className="hover:text-neon transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="p-2 text-foreground hover:text-neon border border-transparent hover:border-neon rounded-full transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;
