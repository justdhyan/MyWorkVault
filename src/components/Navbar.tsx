
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 bg-neu-white z-50 border-b-4 border-neu-black">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="text-3xl font-sans font-extrabold tracking-tight">
              <span className="text-neu-black">MY</span>
              <span className="text-neu-pink">WORK</span>
              <span className="text-neu-blue">VAULT</span>
            </a>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-2">
              <li>
                <a href="#projects" className="nav-link after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-neu-black after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#about" className="nav-link after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-neu-pink after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#contact" className="nav-link after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-neu-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                  CONTACT
                </a>
              </li>
              <li>
                <a href="#" className="neu-button ml-4">RESUME</a>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 border-4 border-neu-black hover:bg-neu-yellow transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t-4 border-neu-black bg-neu-white`}>
        <div className="px-2 pt-2 pb-4">
          <a href="#projects" className="block py-3 px-4 text-xl font-bold border-b-2 border-neu-black hover:bg-neu-yellow">
            PROJECTS
          </a>
          <a href="#about" className="block py-3 px-4 text-xl font-bold border-b-2 border-neu-black hover:bg-neu-pink">
            ABOUT
          </a>
          <a href="#contact" className="block py-3 px-4 text-xl font-bold border-b-2 border-neu-black hover:bg-neu-blue">
            CONTACT
          </a>
          <a href="#" className="block mt-4 mx-4 py-3 px-4 text-xl text-center font-bold border-4 border-neu-black bg-neu-yellow">
            RESUME
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
