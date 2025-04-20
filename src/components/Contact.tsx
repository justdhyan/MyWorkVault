import React, { useState } from 'react';
import { toast } from "@/components/ui/use-toast";
import ScrollAnimation from './ScrollAnimation';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log('Form submitted:', formData);

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      duration: 5000,
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-6 inline-block bg-neu-pink px-4 py-2 text-white border-4 border-neu-black">
              GET IN TOUCH
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? Drop me a message!
            </p>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation delay={0.2}>
          <div className="bg-neu-white border-4 border-neu-black p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-bold mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="neu-input"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg font-bold mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="neu-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg font-bold mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="neu-input min-h-[150px] resize-y"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <div className="text-center pt-4">
                <button 
                  type="submit" 
                  className="neu-button bg-neu-blue hover:bg-neu-pink transition-colors duration-300 w-full md:w-auto text-xl"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-lg mb-4 font-bold">OR REACH ME ON</p>
            <div className="flex justify-center space-x-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'GitHub'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="neu-button bg-white hover:bg-neu-yellow px-4 py-2"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
