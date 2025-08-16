import React from 'react';
import profilePhoto from '@/assets/pphotoa.jpg';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="neon-text">About</span> <span className="text-foreground">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Profile Photo */}
            <div className="flex justify-center items-center">
              <img
                src={profilePhoto}
                alt="Smruti Mahapatra"
                className="w-80 h-95 rounded-full border-4 border-secondary shadow-2xl animate-glow-pulse object-cover"
              />
            </div>

            {/* Right Side - About Text + Highlights */}
            <div>
              {/* About Text */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Full-Stack Developer with expertise in modern web technologies.
                I specialize in creating robust, scalable applications using Java, Spring Boot,
                and cutting-edge frontend technologies.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                With a strong foundation in both backend and frontend development, I bring ideas
                to life through clean, efficient code and intuitive user experiences.
              </p>

              {/* Key Highlights */}
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 neon-green">Key Highlights</h3>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Backend Expertise:</strong> Proficient in Java, Spring Boot,
                      and database design with MySQL for building scalable server-side applications.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Frontend Skills:</strong> Creating responsive,
                      interactive user interfaces with HTML, CSS, JavaScript, and modern frameworks.
                    </p>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Problem Solver:</strong> Passionate about writing
                      clean, maintainable code and solving complex technical challenges.
                    </p>
                  </div>

            
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
