import React from 'react';

interface TimelineItem {
  type: 'education' | 'internship';
  title: string;
  organization: string;
  period: string;
  description: string;
  skills?: string[];
}

const timelineData: TimelineItem[] = [
  {
    type: 'education',
    title: 'Bachelor of Technology in Computer Science',
    organization: 'Centurion University of Technology & Management, Bhubaneswar',
    period: '2022 - 2026',
    description: 'Focused on software development, data structures, algorithms, and web technologies. Maintained excellent academic performance while working on various projects.',
    skills: ['Java', 'Data Structures', 'Algorithms', 'Database Design']
  },
  {
    type: 'internship',
    title: 'Full-Stack Developer Intern',
    organization: 'Striving Squad',
    period: 'Feb 2025 - July 2025',
    description: 'Developed and maintained web applications using Java Spring Boot and modern frontend technologies. Collaborated with senior developers on enterprise-level projects.',
    skills: ['Spring Boot', 'MySQL', 'REST APIs', 'JavaScript']
  },
  {
    type: 'internship',
    title: 'Front-end Developer',
    organization: 'Striving Squad',
    period: 'May 2024 - July 2024',
    description: 'Created custom web solutions for various clients, focusing on responsive design and user experience. Delivered projects on time and within budget.',
    skills: ['HTML/CSS', 'JavaScript', 'Responsive Design']
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="neon-text">Internship</span> <span className="text-foreground">&</span> <span className="neon-green">Education</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent"></div>

              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative mb-12 md:mb-16 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute w-6 h-6 rounded-full border-4 ${
                    item.type === 'education' ? 'bg-secondary border-secondary' : 'bg-primary border-primary'
                  } left-5 md:left-1/2 transform md:-translate-x-1/2 z-10`}>
                    <div className={`absolute inset-0 rounded-full animate-ping ${
                      item.type === 'education' ? 'bg-secondary' : 'bg-primary'
                    } opacity-20`}></div>
                  </div>

                  <div className={`glass p-6 rounded-xl ml-16 md:ml-0 hover:transform hover:scale-105 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                  }`}>
                    <div className="flex items-center mb-2">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mr-3 ${
                        item.type === 'education' 
                          ? 'bg-secondary/20 text-secondary border border-secondary/30' 
                          : 'bg-primary/20 text-primary border border-primary/30'
                      }`}>
                        {item.type === 'education' ? '🎓 Education' : '💼 Internship'}
                      </span>
                      <span className="text-sm text-muted-foreground font-mono">{item.period}</span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-lg text-primary mb-4">{item.organization}</p>
                    <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                    {item.skills && (
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground border border-border"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};