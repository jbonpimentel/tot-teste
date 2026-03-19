# TOT Educa - Landing Page (Frontend Challenge)

![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-5.4-purple)
![Vanilla CSS](https://img.shields.io/badge/Styling-Vanilla_CSS-orange)

## 🎯 O que é este projeto?

Este projeto é uma **Single Page Application (SPA)** construída com React para o desafio prático de Front-End da **TOT Educação Corporativa**. A aplicação recria a essência visual e estrutural da página principal da TOT, com grande foco em retenção de usuário, performance e design corporativo moderno.

O objetivo principal deste projeto técnico é demonstrar domínio nas bases fundamentais do Desenvolvimento Front-End (HTML Semântico, Vanilla JS e CSS puro), combinados com a arquitetura escalável e componentizada que o React + Vite oferece.

## ✨ O que o projeto faz (Features)

A página foi construída para conversão e engajamento, apresentando os serviços corporativos através de:

- **Header Dinâmico:** Navegação fixa (*sticky header*) que reage ao scroll da página, incluindo um Menu Hamburger construído do zero com animações CSS.
- **Hero Section Animada:** Entrada com animações de _Fade-In Slide_ e elementos flutuantes contínuos para destacar métricas de sucesso (ex: "97% de Engajamento").
- **Grid de Soluções Interativa:** Cards de serviços ("Cursos de Prateleira", "Consultoria", etc) com efeitos de interação complexos no hover, como deslocamento no eixo Y (elevação), expansão de bordas animadas e _Glassmorphism_.
- **Rodapé (Footer) Estruturado:** Links de navegação semânticos e sessões de contato prontas.
- **100% Responsivo:** O layout se adapta perfeitamente em dispositivos móveis (Mobile-first adaptado), tablets e desktops grandes.

## 🛠️ Decisões Técnicas e Arquitetura

Para provar proficiência técnica base, **nenhum framework de estilização (como Tailwind, Bootstrap ou MUI) foi utilizado**.

- **React & Vite:** Escolhidos para manter um ecossistema modular e de compilação extremamente rápida.
- **CSS Variables & Design System:** As cores `primary`, `secondary` e espaços globais foram consolidados no arquivo `.root` (`index.css`), imitando o poder de um framework utilitário, mas usando CSS Nativo.
- **Vanilla CSS:** Arquivos `.css` acoplados a cada componente para facilitar a manutenção de código limpo (Modularização).
- **Semântica (SEO):** Utilização correta das tags HTML5 (`<header>`, `<nav>`, `<section>`, `<footer>`) para garantir que o projeto seja amigável e acessível aos motores de busca.
- **Hooks:** Controle limpo das lógicas interativas usando `useState` e `useEffect` para manipular o DOM virtual.

## 🚀 Como testar o projeto localmente

Siga o passo a passo para rodar no seu computador:

1. Clone o repositório (`git clone https://github.com/jbonpimentel/tot-teste.git`).
2. Abra a pasta do projeto no terminal (`cd tot-teste`).
3. Instale todas as dependências do React:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento ultra-rápido do Vite:
   ```bash
   npm run dev
   ```
5. Abra o link gerado no terminal (geralmente `http://localhost:5173`) no seu navegador.

---
*Projeto desenvolvido como parte do processo seletivo de estágio em desenvolvimento.*
