import React from 'react';
import ScrollAnimation from './ScrollAnimation';
import { motion } from 'framer-motion';
import freelanceImg from './assets/freelance.jpg'

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  color: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Online Marketplace for Freelancers",
    description: "Freelancer marketplace with job posting, bidding, and payments",
    image: "https://i.ibb.co/0pShR0TK/freelance.jpg",
    tags: ["Express.js", "React", "MongoDB", "Stripe API", "Socket.io"],
    color: "bg-neu-yellow"
  },
  {
    id: 2,
    title: "Decentralized NFT Marketplace",
    description: "Facilitates minting, buying, and selling NFTs.​",
    image: "https://i.ibb.co/3m8XTZLd/NFT.jpg",
    tags: ["React", "Solidity", "Tailwind CSS", "Hardhat", "Ethers.js", "IPFS"],
    color: "bg-neu-blue"
  },
  {
    id: 3,
    title: "AI-Powered Intelligent Code Review Platform",
    description: "Analyzes code for quality and security.",
    image: "https://i.ibb.co/5hw9G2bp/ai-code-review.jpg",
    tags: ["React", "Node.js", "Express.js", "GitHub API", "ESLint", "SonarQube"],
    color: "bg-neu-pink"
  },
  {
    id: 4,
    title: "Real-Time Collaborative Design Tool",
    description: "Allows multiple users to design simultaneously.​",
    image: "https://i.ibb.co/4ZM15xD8/design-tool.jpg",
    tags: ["React", "WebRTC", "Tailwind CSS", "Node.js", "Express.js"],
    color: "bg-neu-yellow"
  },
  {
    id: 5,
    title: "UI/UX Design for a FinTech App",
    description: "A sleek, user-friendly financial application.",
    image: "https://i.ibb.co/kVKF45tt/fintech.jpg",
    tags: ["Figma", "Adobe XD", "React", "Tailwind CSS", "Chart.js"],
    color: "bg-neu-blue"
  },
  {
    id: 6,
    title: "Fitness App UI Design with Personalization",
    description: "A personalized fitness tracker app interface.",
    image: "https://i.ibb.co/S4502K8D/fitness-ui.jpg",
    tags: ["Figma", "Adobe XD", "React", "Redux", "Firebase"],
    color: "bg-neu-pink"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-neu-white">
      <div className="container mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-extrabold mb-6 inline-block border-b-8 border-neu-yellow pb-2"
              animate={{ 
                borderColor: ["#FFDE59", "#FF2D55", "#34E4EA", "#FFDE59"],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              PROJECTS
            </motion.h2>
            <p className="text-xl max-w-2xl mx-auto">
            Projects that I have built to bring unique ideas to life through design and interactivity.
            </p>
          </div>
        </ScrollAnimation>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 50,
                  rotate: -5
                },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  rotate: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1
                  }
                }
              }}
            >
              <div className="neu-project-card group">
                <motion.div 
                  className="relative overflow-hidden h-56"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", bounce: 0.4 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className={`absolute bottom-0 left-0 ${project.color} py-1 px-4 border-t-4 border-r-4 border-neu-black`}
                    whileHover={{
                      scale: 1.1,
                      originX: 0,
                      originY: 1
                    }}
                  >
                    <span className="font-bold text-sm">0{project.id}</span>
                  </motion.div>
                </motion.div>
                
                <div className="p-5">
                  <h3 className="text-2xl font-extrabold mb-2">{project.title}</h3>
                  <p className="mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <motion.span 
                        key={index} 
                        className="inline-block border-2 border-neu-black px-3 py-1 text-sm font-bold"
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: ["#FFDE59", "#FF2D55", "#34E4EA"][index % 3]
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.a 
                    href="#" 
                    className="inline-block font-bold border-b-4 border-neu-black pb-1"
                    whileHover={{ 
                      scale: 1.05,
                      borderColor: ["#000000", "#FF2D55", "#34E4EA", "#000000"],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <ScrollAnimation direction="up" delay={0.2}>
          <div className="text-center mt-16">
            <motion.a 
              href="#" 
              className="neu-button inline-block"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: ["#FFDE59", "#FF2D55", "#34E4EA", "#FFDE59"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              VIEW ALL PROJECTS
            </motion.a>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Projects;
