
import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto relative">

          <div className="absolute -top-8 -left-8 w-16 h-16 bg-neu-blue border-4 border-neu-black rotate-12" />
          <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-neu-pink border-4 border-neu-black rounded-full" />
          
          <ScrollAnimation direction="down" delay={0.2}>
            <div className="relative mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                <span className="block">Creative Developer</span>
                <span className="block mt-2 text-[41px] bg-neu-yellow px-4 py-2 border-4 border-neu-black inline-block rotate-1 hover:rotate-0 transition-transform duration-300">
                Where Design Meets Code
                </span>
              </h1>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation delay={0.4}>
            <p className="text-xl md:text-2xl mb-10 bg-white border-4 border-neu-black p-6 shadow-[8px_8px_0_0_rgba(0,0,0,1)] rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
              I craft bold, interactive digital experiences that stand out from the crowd. Let's build something raw and remarkable together. Let's have a chat ;)
            </p>
          </ScrollAnimation>
          
          <ScrollAnimation direction="up" delay={0.6}>
            <div className="flex flex-col md:flex-row gap-4">
              <a 
                href="#projects" 
                className="neu-button text-center text-lg group flex items-center justify-center gap-2"
              >
                VIEW PROJECTS
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="neu-button text-center text-lg bg-neu-blue group flex items-center justify-center gap-2"
              >
                GET IN TOUCH
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] bg-60 bg-neutral-900 [background-position:0_0,30px_30px] blur-[0.5px]" />
      </div>
    </section>
  );
};

export default Hero;
