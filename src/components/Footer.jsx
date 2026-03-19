import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>TOT <span>Educa</span></h2>
            <p>Soluções educativas, entrega de conhecimento e conexão para a sua organização.</p>
          </div>
          
          <div className="footer-links">
            <h3>Soluções</h3>
            <ul>
              <li><a href="#cursos">Cursos Personalizados</a></li>
              <li><a href="#prateleira">Cursos de Prateleira</a></li>
              <li><a href="#plataforma">Plataforma</a></li>
              <li><a href="#consultoria">Consultoria</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3>Conteúdos</h3>
            <ul>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#ebooks">eBooks</a></li>
              <li><a href="#materiais">Materiais Gratuitos</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contato</h3>
            <p>R. Antônio da Veiga, 419, Sala 10</p>
            <p>Blumenau - SC - 89012-500</p>
            <div className="contact-methods">
              <a href="tel:+5547964275326">(47) 96427-5326</a>
              <a href="mailto:contato@toteduca.com.br">contato@toteduca.com.br</a>
            </div>
            <a href="https://api.whatsapp.com/send?phone=5547964275326" target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
              Fale no WhatsApp
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} TOT EDUCAÇÃO CORPORATIVA. TODOS OS DIREITOS RESERVADOS.</p>
          <p>Página inspirada para fins de estudo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
