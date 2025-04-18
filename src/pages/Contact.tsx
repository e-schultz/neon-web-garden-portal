
import { useState } from 'react';
import Layout from '../components/Layout';
import { Send, Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle form submission to a backend
    console.log('Form submitted:', formState);
    alert('Message sent! (This is a demo - no actual message was sent)');
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Layout>
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="mb-12 max-w-2xl">
              <h1 className="text-4xl font-bold mb-2">Contact</h1>
              <p className="text-foreground opacity-70">
                Interested in working together or have a question? Send me a message
                or connect through social platforms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div className="neon-card overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-dark-light border border-foreground border-opacity-20 rounded-md focus:border-neon focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-dark-light border border-foreground border-opacity-20 rounded-md focus:border-neon focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-dark-light border border-foreground border-opacity-20 rounded-md focus:border-neon focus:outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full p-3 bg-dark-light border border-foreground border-opacity-20 rounded-md focus:border-neon focus:outline-none"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="neon-button w-full flex justify-center items-center space-x-2"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
              
              {/* Contact Info & Socials */}
              <div className="space-y-6">
                <div className="neon-card p-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-neon mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a 
                          href="mailto:hello@example.com" 
                          className="text-foreground opacity-70 hover:text-neon"
                        >
                          hello@example.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="neon-card p-6">
                  <h3 className="text-xl font-bold mb-4">Connect</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <SocialLink 
                      icon={<Github className="w-5 h-5" />}
                      title="GitHub"
                      username="@username"
                      url="https://github.com/username"
                    />
                    
                    <SocialLink 
                      icon={<Twitter className="w-5 h-5" />}
                      title="Twitter"
                      username="@username"
                      url="https://twitter.com/username"
                    />
                    
                    <SocialLink 
                      icon={<Linkedin className="w-5 h-5" />}
                      title="LinkedIn"
                      username="Your Name"
                      url="https://linkedin.com/in/username"
                    />
                  </div>
                </div>
                
                <div className="code-block">
                  <pre className="text-terminal-green text-xs">
                    <span className="text-neon-light">async function</span> connect() {"{"}
                    <br/>&nbsp;&nbsp;<span className="text-neon-light">const</span> response = <span className="text-neon-light">await</span> you.sendMessage();
                    <br/>&nbsp;&nbsp;<span className="text-neon-light">return</span> collaboration.start(response);
                    <br/>{"}"}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  title: string;
  username: string;
  url: string;
}

const SocialLink = ({ icon, title, username, url }: SocialLinkProps) => (
  <a 
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-3 bg-dark-light rounded-md hover:bg-neon hover:bg-opacity-20 transition-colors"
  >
    <div className="flex items-center space-x-3">
      {icon}
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-foreground opacity-70">{username}</p>
      </div>
    </div>
  </a>
);

export default Contact;
