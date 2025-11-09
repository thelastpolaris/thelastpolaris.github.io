import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Обо мне' },
    { href: '#experience', label: 'Опыт' },
    { href: '#portfolio', label: 'Проекты' },
    { href: '#contact', label: 'Связаться' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => handleLinkClick(e, '#hero')} className="text-xl font-bold text-gray-900">
          Артем Федоскин
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Mobile menu could be added here if needed */}
      </nav>
    </header>
  );
};

export default Header;
