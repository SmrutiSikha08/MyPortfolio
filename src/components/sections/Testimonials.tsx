import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Subrat Kumar Sahoo',
    role: 'Project Manager',
    company: 'Tech Startup',
    avatar: '👩‍💼',
    testimonial: 'Smruti delivered exceptional work on our web application. His attention to detail and problem-solving skills are outstanding. The project was completed on time and exceeded our expectations.'
  },
  {
    id: 2,
    name: 'Krishna Dey',
    role: 'Senior Developer',
    company: 'Digital Innovations',
    avatar: '👨‍💻',
    testimonial: 'Working with Smruti was a great experience. His coding skills are top-notch, and he brings creative solutions to complex problems. I highly recommend him for any full-stack development project.'
  },
  {
    id: 3,
    name: 'Namita Sahoo',
    role: 'CTO',
    company: 'UDR',
    avatar: '👩‍💻',
    testimonial: 'Smruti helped us build our entire web platform from scratch. His expertise in both frontend and backend development saved us months of development time. Truly a talented developer!'
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-foreground">Client</span> <span className="neon-text">Testimonials</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="glass p-8 rounded-xl text-center max-w-2xl mx-auto">
                      <div className="mb-6">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl">
                          {testimonial.avatar}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1">{testimonial.name}</h3>
                        <p className="text-primary font-semibold">{testimonial.role}</p>
                        <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                      </div>

                      <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic">
                        "{testimonial.testimonial}"
                      </blockquote>

                      <div className="flex justify-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">⭐</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};