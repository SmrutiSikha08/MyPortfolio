import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Please enter your name.",
        variant: "destructive"
      });
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please enter your message.",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_9ztbyia",      // e.g. service_9ztbyia
        "template_iohhy8j",     // e.g. template_abcd123
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        "GjSr0rDUSMsY8M8E7"       // e.g. your EmailJS public key 
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openEmailClient = () => {
    window.open('mailto:smrutimahapatra297@gmail.com?subject=Portfolio Contact', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/smrutimahapatra8', '_blank', 'noopener,noreferrer');
  };

  const openGitHub = () => {
    window.open('https://github.com/SmrutiSikha08', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="neon-text">Get</span> <span className="text-foreground">In</span> <span className="neon-green">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect!</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on projects, 
                  or simply chat about technology. Feel free to reach out!
                </p>

                <div className="space-y-6">
                  <div 
                    onClick={openEmailClient}
                    className="flex items-center space-x-4 p-4 glass rounded-xl cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Email</p>
                      <p className="text-muted-foreground">smrutimahpatra297@gmail.com</p>
                    </div>
                  </div>

                  <div 
                    onClick={openLinkedIn}
                    className="flex items-center space-x-4 p-4 glass rounded-xl cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-secondary text-xl">💼</span>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">LinkedIn</p>
                      <p className="text-muted-foreground">Connect with me professionally</p>
                    </div>
                  </div>

                  <div 
                    onClick={openGitHub}
                    className="flex items-center space-x-4 p-4 glass rounded-xl cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <span className="text-accent text-xl">🔧</span>
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">GitHub</p>
                      <p className="text-muted-foreground">Check out my code repositories</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="glass p-8 rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary"
                      placeholder="enter..."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border focus:border-primary min-h-[120px]"
                      placeholder="feel free to type..."
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="cyber-button w-full py-6 text-lg font-semibold"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
