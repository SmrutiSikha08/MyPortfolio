import React from 'react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="neon-text">Smruti Sikha</span> <span className="text-foreground">Mahapatra</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer passionate about creating innovative web solutions
              with clean code and cutting-edge technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Internships', id: 'internship' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Connect</h4>
            <div className="space-y-3">
              <button
                onClick={() => openLink('https://www.linkedin.com/in/smrutimahapatra8')}
                className="flex items-center space-x-3 text-muted-foreground hover:text-secondary transition-colors duration-300"
              >
                <span className="text-xl">💼</span>
                <span>LinkedIn</span>
              </button>

              <button
                onClick={() => openLink('https://github.com/SmrutiSikha08')}
                className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-xl">🔧</span>
                <span>GitHub</span>
              </button>
              <button
                onClick={() => openLink('mailto:smrutimahapatra297@gmail.com')}
                className="flex items-center space-x-3 text-muted-foreground hover:text-accent transition-colors duration-300"
              >
                <span className="text-xl">📧</span>
                <span>Email</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Smruti Sikha Mahapatra. All rights reserved.
          </p>

          <Button
            onClick={scrollToTop}
            variant="outline"
            className="cyber-button border-primary/50 hover:border-primary"
          >
            Back to Top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};