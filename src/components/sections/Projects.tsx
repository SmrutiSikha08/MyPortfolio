import React from 'react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project1.jpg';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.jpg';
import project4 from '@/assets/project4.jpg';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Book Management System',
    description: 'A project that allows users to manage e-books efficiently, including adding, editing, deleting, and organizing them, with features like search, categorization, and easy access for reading.',
    image: project2,
    technologies: ['Advance Java', 'MySQL', 'JavaScript', 'HTML/CSS'],
    github: 'https://github.com/SmrutiSikha08/E-Book/tree/master'
  },
  {
    id: 2,
    title: 'Enhanced-Project-Management-System',
    description: 'A full-stack web app to manage projects and tasks with user roles, deadlines, and status tracking. Built using HTML, CSS, JavaScript, Spring Boot, and MySQL',
    image: project3,
    technologies: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS', 'Javascript'],
    github: 'https://github.com/SmrutiSikha08/Enhanced-Project-Management-System'
  },
  {
    id: 3,
    title: 'Lenskart-Website',
    description: 'Lenskart is an online eyewear platform offering a wide range of eyeglasses, sunglasses, and contact lenses, combining virtual try-on technology with doorstep delivery to make buying eyewear convenient and personalized.',
    image: project4,
    technologies: ['PHP', 'Chart.js', 'HTML/CSS', 'MySQL'],
    github: 'https://github.com/SmrutiSikha08/Lenskart-Website'
  }
];

export const Projects = () => {
  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-foreground">Featured</span> <span className="neon-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="glass rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium border"
                        style={{
                          backgroundColor: `hsl(var(--${techIndex % 2 === 0 ? 'primary' : 'secondary'}) / 0.1)`,
                          borderColor: `hsl(var(--${techIndex % 2 === 0 ? 'primary' : 'secondary'}) / 0.3)`,
                          color: `hsl(var(--${techIndex % 2 === 0 ? 'primary' : 'secondary'}))`
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      onClick={() => openLink(project.github)}
                      variant="outline"
                      className="flex-1 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-sm"
                    >
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => openLink('https://github.com/SmrutiSikha08')}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg"
            >
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};