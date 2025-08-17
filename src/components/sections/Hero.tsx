import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/pphoto.jpg';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Java Full-Stack Developer";

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, hsl(240 10% 3.9% / 0.8), hsl(240 8% 8% / 0.6)), url(${heroBg})`
      }}
    >
      {/* Animated particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle animate-float-up"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 animate-slide-up">
          <img
            src={profilePhoto}
            alt="Smruti Mahapatra"
            className="w-70 h-40 mx-auto rounded-full border-4 border-primary shadow-2xl animate-glow-pulse object-cover"
          />
        </div>

        <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="neon-text">Smruti Sikha</span>{' '}
            <span className="text-foreground">Mahapatra</span>
          </h1>

          <div className="text-xl md:text-2xl mb-4 h-8">
            <span className="neon-green font-mono">
              {displayText}
              {displayText.length < fullText.length && <span className="animate-type-cursor">|</span>}
            </span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Designing and developing applications that work seamlessly and look great.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button
            onClick={() => scrollToSection('contact')}
            className="px-6 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-300 shadow hover:shadow-md"
          >
            Hire Me
          </Button>
          <Button
            onClick={() => scrollToSection('projects')}
            variant="outline"
            className="px-6 py-4 text-lg font-semibold border-primary text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View Projects
          </Button>
          <a
            href="/SmrutiResume.pdf"
            download="SmrutiResume.pdf"
            className="px-6 py-4 text-lg font-semibold bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download my CV
          </a>



        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};