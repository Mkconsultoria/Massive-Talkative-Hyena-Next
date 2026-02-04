import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Massive Talkative Hyena</title>
          <meta property="og:title" content="Massive Talkative Hyena" />
          <link
            rel="canonical"
            href="https://massive-talkative-hyena-9g4440.teleporthq.app/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-bg-media">
            <video
              src="https://videos.pexels.com/video-files/34128937/14471934_640_360_30fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="hero-video"
            ></video>
            <div className="home-thq-hero-overlay-elm hero-overlay"></div>
          </div>
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-text-wrapper">
                <h1 className="home-thq-hero-title-elm hero-title home-hero-title">
                  Transformando dados em excelência operacional
                </h1>
                <p className="hero-subtitle home-hero-subtitle">
                  A MK/ST capacita empresas com dashboards de BI, automações
                  inteligentes e arquiteturas em nuvem que transformam
                  complexidade em vantagem competitiva real.
                </p>
                <div className="hero-actions">
                  <a href="#contact">
                    <div className="btn btn-primary btn-lg">
                      <span>Fale com um especialista</span>
                    </div>
                  </a>
                  <a href="#areas">
                    <div className="btn btn-outline btn-lg">
                      <span>Conheça nossas soluções</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="hero-visual-wrapper">
                <div className="hero-glass-card">
                  <div className="hero-badge">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20M2 12h20"></path>
                    </svg>
                    <span>
                      <span>Nível Corporativo</span>
                      <br></br>
                      Enterprise Grade
                    </span>
                  </div>
                  <img
                    alt="MK/ST Dashboard"
                    src="https://images.pexels.com/photos/34069/pexels-photo.jpg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="hero-card-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="kpi-section">
          <div className="kpi-container">
            <div className="kpi-header">
              <h2 className="section-title">Performance em escala</h2>
              <p className="section-content">
                Resultados mensuráveis em dados, automação e infraestrutura
                tecnológica.
              </p>
            </div>
            <div className="kpi-grid">
              <div className="kpi-card">
                <span className="kpi-value">45%</span>
                <span className="kpi-label">
                  <span>Ganho de eficiência operacional</span>
                  <br></br>
                  Efficiency Gains
                </span>
                <p className="section-content">
                  Aumento médio de produtividade em processos automatizados.
                </p>
              </div>
              <div className="kpi-card">
                <span className="kpi-value">300+</span>
                <span className="kpi-label">
                  <span>Dashboards entregues</span>
                  <br></br>
                  Dashboards Deployed
                </span>
                <p className="section-content">
                  Plataformas de BI estratégicas para times executivos e
                  operacionais.
                </p>
              </div>
              <div className="kpi-card">
                <span className="kpi-value">$12M+</span>
                <span className="kpi-label">
                  <span>Economia gerada</span>
                  <br></br>
                  Cost Savings
                </span>
                <p className="section-content">
                  Redução de custos identificada por meio de analytics avançado.
                </p>
              </div>
              <div className="kpi-card">
                <span className="kpi-value">1.5k</span>
                <span className="kpi-label">
                  <span>Integrações realizadas</span>
                  <br></br>
                  Integrations Delivered
                </span>
                <p className="section-content">
                  Conexões seguras entre sistemas complexos e ambientes
                  corporativos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="areas" className="areas-section">
          <div className="areas-container">
            <div className="areas-header">
              <h2 className="section-title">Áreas de atuação</h2>
              <p className="section-content">
                Soluções tecnológicas desenhadas para operações empresariais
                modernas.
              </p>
            </div>
            <div className="areas-grid">
              <div className="area-card">
                <div className="area-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1m0 12h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1m10-4h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1m0-8h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">BI &amp; Analytics</h3>
                <p className="section-content">
                  Transformamos dados brutos em indicadores estratégicos por
                  meio de dashboards executivos e operacionais.
                </p>
              </div>
              <div className="area-card">
                <div className="area-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm6-4v2m-3 8v9m6-9v9M5 16l4-2m6 0l4 2M9 18h6M10 8v.01M14 8v.01"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span>Automação Inteligente</span>
                  <br></br>
                  Intelligent Automation
                </h3>
                <p className="section-content">
                  Bots e fluxos que eliminam tarefas manuais, reduzem erros e
                  aceleram operações críticas.
                </p>
              </div>
              <div className="area-card">
                <div className="area-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span>Arquitetura em Nuvem</span>
                  <br></br>
                  Cloud Architecture
                </h3>
                <p className="section-content">
                  Ambientes seguros, escaláveis e resilientes para sistemas
                  corporativos de missão crítica.
                </p>
              </div>
              <div className="area-card">
                <div className="area-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11.175 11.178a2 2 0 1 0 2.653 2.634M14.5 10.5l1-1"></path>
                    <path d="M8.621 4.612a9 9 0 0 1 11.721 11.72m-1.516 2.488A9 9 0 0 1 17.6 20H6.4a9 9 0 0 1-.268-13.87M3 3l18 18"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span>Integração de Sistemas</span>
                  <br></br>
                  System Integration
                </h3>
                <p className="section-content">
                  Conectamos sistemas isolados em um ecossistema único,
                  eficiente e confiável.
                </p>
              </div>
              <div className="area-card">
                <div className="area-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span>Logística &amp; Financeiro</span>
                  <br></br>
                  Logistics &amp; Finance
                </h3>
                <p className="section-content">
                  Visibilidade em tempo real para cadeia de suprimentos, custos
                  e performance financeira.
                </p>
              </div>
              <div className="area-card">
                <div className="area-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M19 8v6m3-3h-6"></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  <span>RH &amp; Facilities</span>
                  <br></br>
                  HR &amp; Facilities
                </h3>
                <p className="section-content">
                  Plataformas inteligentes para gestão de pessoas,
                  infraestrutura física e segurança.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio-section">
          <div className="portfolio-container">
            <div className="portfolio-featured">
              <div className="portfolio-media">
                <img
                  alt="Featured Project"
                  src="https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="portfolio-img"
                />
                <div className="portfolio-scrim"></div>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-tags">
                  <span className="portfolio-tag">FINANCEIRO</span>
                  <span className="portfolio-tag">BI</span>
                </div>
                <h2 className="home-thq-section-title-elm3 section-title">
                  Integração de Dados no Setor Bancário Global
                </h2>
                <p className="home-thq-section-content-elm22 section-content">
                  Consolidated 14 disparate data sources into a single real-time
                  executive cockpit for a top-tier financial institution.
                </p>
                <a href="#">
                  <div className="btn btn-primary">
                    <span>Ver Estudo de Caso</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-grid">
              <div className="portfolio-item">
                <div className="portfolio-item-media">
                  <img
                    alt="Project 2"
                    src="https://images.pexels.com/photos/17489152/pexels-photo-17489152.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="portfolio-img"
                  />
                </div>
                <div className="portfolio-item-content">
                  <span className="portfolio-tag">Logística</span>
                  <h3 className="section-subtitle">
                    <span>Automação de Supply Chain</span>
                    <br></br>
                    Supply Chain Bot
                  </h3>
                  <p className="section-content">
                    Rastreamento automatizado de mais de 500 remessas mensais
                    com 99,9% de precisão.
                  </p>
                </div>
              </div>
              <div className="portfolio-item">
                <div className="portfolio-item-media">
                  <img
                    alt="Project 3"
                    src="https://images.pexels.com/photos/6466141/pexels-photo-6466141.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="portfolio-img"
                  />
                </div>
                <div className="portfolio-item-content">
                  <span className="portfolio-tag">Cloud</span>
                  <h3 className="section-subtitle">
                    <span>Migração de Sistemas Legados</span>
                    <br></br>
                    Legacy Migration
                  </h3>
                  <p className="section-content">
                    Migração de plataformas internas para ambiente híbrido em
                    nuvem, sem indisponibilidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="dashboard-teaser-section">
          <div className="dashboard-container">
            <div className="dashboard-split">
              <div className="dashboard-text">
                <h2 className="section-title">Indicadores que geram decisão</h2>
                <p className="section-content">
                  Nossos dashboards são criados para responder às perguntas
                  certas, permitindo decisões rápidas, confiáveis e orientadas
                  por dados.
                </p>
                <ul className="dashboard-list">
                  <li className="dashboard-list-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Pipelines ETL em tempo real</span>
                  </li>
                  <li className="dashboard-list-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Modelagem preditiva de KPIs</span>
                  </li>
                  <li className="dashboard-list-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>Integração de múltiplas fontes de dados</span>
                  </li>
                </ul>
              </div>
              <div className="dashboard-mockup">
                <div className="mockup-frame">
                  <img
                    alt="Dashboard Mockup"
                    src="https://images.pexels.com/photos/577195/pexels-photo-577195.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="mockup-img"
                  />
                  <div className="mockup-overlay">
                    <div className="mockup-stat-bubble">
                      <span className="bubble-val">+12.4%</span>
                      <span className="bubble-label">
                        <span>Crescimento</span>
                        <br></br>
                        <br></br>
                        Growth
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="testimonials-rail">
            <div className="testimonial-card">
              <p className="testimonial-quote">
                “A MK/ST transformou nossos dados logísticos em uma vantagem
                competitiva real. A automação economizou milhares de horas
                operacionais.”
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  <span>Diretor de Operações</span>
                  <br></br>
                  Director of Operations
                </span>
                <span className="author-company">Grupo Logístico Global</span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                “Os dashboards de BI entregues pela MK/ST são os mais claros e
                eficientes que já utilizamos. Entrega técnica impecável.”
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  <span>Diretor Financeiro (CFO)</span>
                  <br></br>
                  Chief Financial Officer
                </span>
                <span className="author-company">
                  Empresa de Tecnologia Financeira
                </span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                “Parceiro estratégico na migração para nuvem. Arquitetura
                sólida, segura e escalável.”
              </p>
              <div className="testimonial-author">
                <span className="author-name">
                  <span>VP de Engenharia</span>
                  <br></br>
                  VP of Engineering
                </span>
                <span className="author-company">
                  Empresa de Tecnologia Corporativa
                </span>
              </div>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-quote">
                &quot;MK/ST&apos;s ability to integrate our legacy systems with
                modern cloud tools was the key to our digital transformation
                success.&quot;
              </p>
              <div className="testimonial-author">
                <span className="author-name">IT Infrastructure Lead</span>
                <span className="author-company">
                  Industrial Manufacturing S.A.
                </span>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="contact-container">
            <div className="contact-card">
              <div className="contact-info">
                <h2 className="section-title">
                  Pronto para otimizar sua operação?
                </h2>
                <p className="section-content">
                  Converse com nossos especialistas e descubra como transformar
                  seus dados em um ativo estratégico.
                </p>
                <div className="contact-links">
                  <a href="mailto:contact@mkst.consulting?subject=">
                    <div className="btn-link">
                      <span>mkst@gmail.com</span>
                    </div>
                  </a>
                  <a href="tel:+1234567890">
                    <div className="btn-link">
                      <span>+55 (41) 9 8866-6447</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="contact-cta">
                <a href="#">
                  <div className="btn btn-xl btn-accent">
                    <span>Iniciar um projeto</span>
                  </div>
                </a>
                <p className="section-content">
                  Tempo médio de resposta: até 4 horas
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-10px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script defer data-name="mkst-interactions">
(function(){
  // Parallax effect for hero glass card
  const heroCard = document.querySelector(".hero-glass-card")
  if (heroCard) {
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const xPos = (clientX / innerWidth - 0.5) * 20
      const yPos = (clientY / innerHeight - 0.5) * 20
      heroCard.style.transform = \`perspective(1000px) rotateY(\${xPos - 5}deg) rotateX(\${-yPos}deg)\`
    })
  }

  // Staggered reveal for KPI cards on scroll
  const observerOptions = {
    threshold: 0.2,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".kpi-card, .area-card, .portfolio-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })

  // Testimonials auto-scroll enhancement
  const rail = document.querySelector(".testimonials-rail")
  if (rail) {
    let isDown = false
    let startX
    let scrollLeft

    rail.addEventListener("mousedown", (e) => {
      isDown = true
      rail.classList.add("active")
      startX = e.pageX - rail.offsetLeft
      scrollLeft = rail.scrollLeft
    })

    rail.addEventListener("mouseleave", () => {
      isDown = false
    })

    rail.addEventListener("mouseup", () => {
      isDown = false
    })

    rail.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - rail.offsetLeft
      const walk = (x - startX) * 2
      rail.scrollLeft = scrollLeft - walk
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div aria-label="Sign up to TeleportHQ" className="home-container6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon33"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text53">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-thq-hero-overlay-elm {
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            backdrop-filter: blur(5px);
          }
          .home-thq-hero-title-elm {
            width: 786px;
          }
          .home-thq-section-title-elm3 {
            color: rgb(255, 255, 255);
          }
          .home-thq-section-content-elm22 {
            color: #ffffff;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon33 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text53 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default Home
