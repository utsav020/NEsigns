import React, { useState,useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services +', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blogs +', href: '#blogs' },
  ];

  useEffect(() => {
  if (isMenuOpen) {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  } else {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }

  return () => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  };
}, [isMenuOpen]);



  return (
    <>
      <nav className="sticky top-0 left-0 right-0 bg-gradient-to-r from-black via-black to-[#816025] z-50">
        <div className="">
          <div className="containers flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="flex flex-col">
                <img 
                  src="/images/LoderLogo.svg"
                  className='w-40'
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Grid Icon */}
            <div className="hidden md:block">
              <button className="text-white hover:text-yellow-400 transition-colors duration-300">
                <div className="grid grid-cols-3 gap-1 w-8 h-8">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-white rounded-sm hover:bg-yellow-400 transition-colors"
                    ></div>
                  ))}
                </div>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-yellow-400 transition-colors relative z-50"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Full Screen Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-r from-black via-black to-[#816025] z-40 md:hidden overflow-hidden">
          <div className="container mt-15 min-h-screen">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-white hover:text-yellow-400 transition-colors duration-300 text-base font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}