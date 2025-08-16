import React from 'react';

// Import your certificate images
import cr1 from '@/assets/cr1.jpg';
import cr2 from '@/assets/cr2.jpg';
import cr3 from '@/assets/cr3.jpg';
import cr4 from '@/assets/cr4.jpg';

interface Achievement {
  id: number;
  title: string;
  issuer: string;
  date: string;
  icon: string;
  color: 'primary' | 'secondary' | 'accent' | 'pink';
  certificateUrl: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: 'GeeksforGeeks',
    issuer: 'Geeks',
    date: '2025',
    icon: '🏆',
    color: 'primary',
    certificateUrl: cr1
  },
  {
    id: 2,
    title: 'AWS Academy Cloud Foundation',
    issuer: 'AWS Academy',
    date: '2024',
    icon: '☁️',
    color: 'secondary',
    certificateUrl: cr2
  },
  {
    id: 3,
    title: 'Front-End Developer',
    issuer: 'UDRT',
    date: '2024',
    icon: '💻',
    color: 'accent',
    certificateUrl: cr3
  },
  {
    id: 4,
    title: 'Full-stack Developer',
    issuer: 'UDRT',
    date: '2025',
    icon: '💻',
    color: 'accent',
    certificateUrl: '#'
  }
];

export const Achievements = () => {
  const getColorClasses = (color: string) => {
    const colorClasses = {
      primary: 'border-primary/30 bg-primary/10 text-primary',
      secondary: 'border-secondary/30 bg-secondary/10 text-secondary',
      accent: 'border-accent/30 bg-accent/10 text-accent',
      pink: 'border-pink/30 bg-pink/10'
    };
    return colorClasses[color as keyof typeof colorClasses] || colorClasses.primary;
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="neon-green">Certifications</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="glass p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full border-2 ${getColorClasses(achievement.color)} flex-shrink-0`}>
                    <span className="text-2xl">{achievement.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{achievement.title}</h3>
                    <p className="text-primary font-semibold">{achievement.issuer}</p>
                    <span className="text-sm text-muted-foreground">{achievement.date}</span>
                  </div>
                </div>
                {/* View Certificate Button */}
                <div className="mt-4">
                  <a
                    href={achievement.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full shadow hover:bg-blue-600 transition"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
