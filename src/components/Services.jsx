import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: 'Cursos Personalizados',
    description: 'Conteúdos estratégicos, desenvolvidos para a sua realidade e adaptados para os seus colaboradores.',
    icon: '🎯'
  },
  {
    title: 'Cursos de Prateleira',
    description: 'Catálogo de cursos prontos com metodologias ágeis e conteúdos atualizados para rápida aplicação.',
    icon: '📚'
  },
  {
    title: 'Plataforma de Aprendizagem',
    description: 'Uma jornada digital completa e intuitiva, focada na melhor experiência de aprendizagem.',
    icon: '💻'
  },
  {
    title: 'Consultoria',
    description: 'Apoio estratégico para implantar e evoluir a Universidade Corporativa da sua empresa.',
    icon: '🤝'
  }
];

const Services = () => {
  return (
    <section className="services section" id="solucoes">
      <div className="container">
        <div className="services-header">
          <h2>Nossas Soluções Educativas</h2>
          <p>Entender o contexto, personalizar a jornada e caminhar lado a lado com a sua organização.</p>
        </div>
        
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#saiba-mais" className="service-link">
                Saiba mais <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
