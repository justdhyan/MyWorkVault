import React from 'react';
import { Image } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-neu-yellow border-y-4 border-neu-black">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <ScrollAnimation direction="left" className="order-2 md:order-1">
            <h2 className="text-5xl font-extrabold mb-6 inline-block bg-white px-4 py-2 border-4 border-neu-black transform -rotate-2">
              ABOUT ME
            </h2>
            
            <div className="space-y-4 neu-card rotate-1 bg-white">
              <p className="text-lg">
              I'm a designer and developer who embraces brutalist design, using raw aesthetics, bold typography, and high contrast to create functional and visually compelling interfaces.
              </p>
              
              <p className="text-lg">
              With expertise in React, TypeScript, and a suite of creative tools, I build digital products that prioritize usability while pushing creative boundaries.
              </p>
              
              <p className="text-lg">
              Each project is an opportunity to experiment, iterate, and deliver authentic digital solutions that resonate.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-bold mb-3 border-b-4 border-neu-black pb-2">SKILLS</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'UI/UX', 'Tailwind CSS', 'Figma', 'Animation', 'Node.js', 'Accessibility'].map((skill) => (
                    <span key={skill} className="inline-block bg-neu-black text-white px-3 py-1 text-sm font-bold">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation direction="right" className="order-1 md:order-2">
            <div className="bg-white border-4 border-neu-black p-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)] rotate-2 relative">
              <div className="aspect-square bg-neu-blue flex items-center justify-center border-4 border-neu-black">
                <Image size={64} className="text-neu-black" />
                <span className="absolute bg-neu-pink text-white font-bold py-2 px-4 right-[-20px] bottom-[-10px] border-4 border-neu-black transform rotate-[-5deg]">
                  PORTRAIT
                </span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
