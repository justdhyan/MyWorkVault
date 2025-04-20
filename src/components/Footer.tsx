
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neu-black text-white py-10 border-t-4 border-neu-yellow">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-extrabold mb-4">
              <span className="text-white">MY</span>
              <span className="text-neu-pink">WORK</span>
              <span className="text-neu-blue">VAULT</span>
            </h3>
            <p className="text-gray-300">
              Creating digital experiences with a creative  approach.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-neu-yellow">SITE MAP</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-neu-yellow transition-colors">Home</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-neu-yellow transition-colors">Projects</a>
              </li>
              <li>
                <a href="#about" className="hover:text-neu-yellow transition-colors">About</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neu-yellow transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4 text-neu-blue">CONNECT</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-neu-blue transition-colors">Twitter</a>
              </li>
              <li>
                <a href="#" className="hover:text-neu-blue transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href="#" className="hover:text-neu-blue transition-colors">Instagram</a>
              </li>
              <li>
                <a href="#" className="hover:text-neu-blue transition-colors">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-700 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} MyWorkVault. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <a href="#" className="hover:text-neu-yellow mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-neu-pink">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
