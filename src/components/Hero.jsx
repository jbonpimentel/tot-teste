import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">Educação Corporativa</div>
          <h1 className="hero-title">
            Soluções educativas e de <span>conhecimento</span> para sua organização
          </h1>
          <p className="hero-description">
            Conteúdos estratégicos, desenvolvidos para a sua realidade, 
            adaptados para os seus colaboradores e personalizados para sua empresa.
            Com a TOT, o cliente nunca anda sozinho.
          </p>
          <div className="hero-buttons">
            <a href="#demonstracao" className="btn btn-primary">Agendar demonstração</a>
            <a href="#solucoes" className="btn btn-outline">Quero saber mais</a>
          </div>
          
          <div className="hero-stats-highlights">
            <div className="stat-highlight">
              <strong>+ 2.5M</strong>
              <span>Aprendizes</span>
            </div>
            <div className="stat-highlight">
              <strong>+ 1200</strong>
              <span>Projetos Entregues</span>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="image-wrapper">
            <div className="blob-bg"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Equipe colaborando em treinamento" 
              className="main-img" 
              loading="lazy"
            />
            <div className="floating-card metric-card">
              <span className="icon">⭐</span>
              <div className="card-content">
                <strong>97%</strong>
                <p>Engajamento</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
