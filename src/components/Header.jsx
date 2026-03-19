import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <h2>TOT <span>Educa</span></h2>
        </div>
        
        <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#solucoes" onClick={() => setIsMenuOpen(false)}>Soluções Educativas</a></li>
            <li><a href="#cursos" onClick={() => setIsMenuOpen(false)}>Cursos Personalizados</a></li>
            <li><a href="#plataforma" onClick={() => setIsMenuOpen(false)}>Plataforma</a></li>
            <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
          <div className="mobile-actions">
            <a href="#demonstracao" className="btn btn-primary">Agendar Demonstração</a>
          </div>
        </nav>

        <div className="header-actions">
          <a href="#demonstracao" className="btn btn-primary">Agendar Demonstração</a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
