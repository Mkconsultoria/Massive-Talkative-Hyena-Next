import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-root">
          <div className="footer-container">
            <div className="footer-main-grid">
              <div className="footer-column">
                <div className="footer-brand">
                  <span className="footer-logo-text">MK/ST</span>
                  <p className="section-content footer-description">
                    Transformamos dados complexos em eficiência operacional e
                    vantagem competitiva sustentável por meio de automação
                    inteligente e arquitetura em nuvem.
                  </p>
                </div>
                <div className="footer-social-group">
                  <a href="#">
                    <div aria-label="LinkedIn" className="footer-social-link">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                          <circle r="2" cx="4" cy="4"></circle>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="Twitter" className="footer-social-link">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div aria-label="GitHub" className="footer-social-link">
                      <svg
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <g
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column">
                <h3 className="footer-heading section-subtitle">Serviços</h3>
                <nav className="footer-nav">
                  <ul className="footer-nav-list">
                    <li>
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>BI &amp; Analytics</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Automação Inteligente</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Integração de Sistemas</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Arquitetura em Nuvem</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Plataformas Internas</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer-column">
                <h3 className="footer-heading section-subtitle">Contato</h3>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle r="3" cx="12" cy="10"></circle>
                      </g>
                    </svg>
                    <span className="section-content">
                      Rua Reinaldo Miguel Valenga
                    </span>
                  </div>
                  <div className="footer-contact-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                        <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                      </g>
                    </svg>
                    <a href="mailto:solutions@mkst.tech?subject=">
                      <div className="footer-nav-link">
                        <span>mkst@gmail.com</span>
                      </div>
                    </a>
                  </div>
                  <div className="footer-contact-item">
                    <svg
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                      height="18"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <span className="section-content">+55 (41) 98866-6447</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-content">
                <p className="section-content footer-copyright">
                  © 2026 MK/ST Soluções em Tecnologia. Todos os direitos
                  reservados.
                </p>
                <div className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>
                        <span>Política de Privacidade</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>
                        <span>Termos de Uso</span>
                        <br></br>
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>
                        <span>Configurações de Cookies</span>
                        <span></span>
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-interactivity">
(function(){
  const footerSocialLinks = document.querySelectorAll(".footer-social-link")

  footerSocialLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      const svg = link.querySelector("svg")
      if (svg) {
        svg.style.transition = "transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        svg.style.transform = "scale(1.2)"
      }
    })

    link.addEventListener("mouseleave", () => {
      const svg = link.querySelector("svg")
      if (svg) {
        svg.style.transform = "scale(1)"
      }
    })
  })

  const footerNavLinks = document.querySelectorAll(".footer-nav-link")

  footerNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href") === "#") {
        e.preventDefault()
        console.log("Navigation placeholder clicked:", link.textContent.trim())
      }
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
