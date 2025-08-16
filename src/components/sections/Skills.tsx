import React, { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Basic';
  category: 'Backend' | 'Frontend' | 'Database' | 'Tools';
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'Java', level: 'Expert', category: 'Backend', icon: '☕' },
  { name: 'Spring Boot', level: 'Expert', category: 'Backend', icon: '🍃' },
  { name: 'MySQL', level: 'Advanced', category: 'Database', icon: '🗄️' },
  { name: 'HTML/CSS', level: 'Expert', category: 'Frontend', icon: '🎨' },
  { name: 'JavaScript', level: 'Advanced', category: 'Frontend', icon: '⚡' },
  { name: 'Git', level: 'Intermediate', category: 'Tools', icon: '🔧' },
  { name: 'REST APIs', level: 'Expert', category: 'Backend', icon: '🔗' },
  { name: 'React', level: 'Advanced', category: 'Frontend', icon: '⚛️' }
];

const levelDefinitions = {
  Expert: { 
    level: 4, 
    color: 'bg-emerald-500'
  },
  Advanced: { 
    level: 3, 
    color: 'bg-blue-500'
  },
  Intermediate: { 
    level: 2, 
    color: 'bg-amber-500'
  },
  Basic: { 
    level: 1, 
    color: 'bg-gray-500'
  }
};

const categoryColors = {
  Backend: 'bg-purple-900/30 text-purple-400 border-purple-800',
  Frontend: 'bg-blue-900/30 text-blue-400 border-blue-800',
  Database: 'bg-green-900/30 text-green-400 border-green-800',
  Tools: 'bg-orange-900/30 text-orange-400 border-orange-800'
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [animatedSkills, setAnimatedSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredSkills = activeCategory === 'All' 
    ? animatedSkills 
    : animatedSkills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-100">Technical</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Skills
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My expertise across different technologies
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['All', 'Backend', 'Frontend', 'Database', 'Tools'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-emerald-500 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const { level, color } = levelDefinitions[skill.level];
            return (
              <div 
                key={skill.name}
                className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-blue-500/30"
              >
                <div className="flex items-start justify-between">
                  <div className="text-3xl mb-4 text-white">{skill.icon}</div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${categoryColors[skill.category]}`}>
                    {skill.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {skill.name}
                </h3>
                
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${color} text-white`}>
                      {skill.level}
                    </span>
                    <span className="text-xs text-gray-400">
                      {level}/4
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${color}`}
                      style={{ width: `${(level / 4) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gray-800 p-6 rounded-xl border border-gray-700 max-w-3xl">
            <p className="text-lg text-gray-300">
              "Continuously expanding my expertise across the full development stack."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};