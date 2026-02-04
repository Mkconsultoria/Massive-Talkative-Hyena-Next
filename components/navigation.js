import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <a href="/">
              <div aria-label="MK/ST Home" className="navigation-logo">
                <span className="navigation-logo-text">
                  <span>
                    {' '}
                    MK
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="navigation-text11">/</span>
                  <span> Soluções em Tecnologia</span>
                </span>
              </div>
            </a>
            <div className="navigation-desktop-links">
              <a href="#areas">
                <div className="navigation-link">
                  <span>Áreas</span>
                </div>
              </a>
              <a href="#portfolio">
                <div className="navigation-link">
                  <span>Portfólio</span>
                </div>
              </a>
              <a href="#kpis">
                <div className="navigation-link">
                  <span>Insights</span>
                </div>
              </a>
              <a href="#testimonials">
                <div className="navigation-link">
                  <span>Sucesso do Cliente</span>
                </div>
              </a>
              <a href="#contact">
                <div className="btn btn-primary btn-sm">
                  <span>Fale Conosco</span>
                </div>
              </a>
            </div>
            <button
              id="navigation-mobile-toggle"
              aria-label="Open menu"
              aria-controls="navigation-mobile-overlay"
              aria-expanded="false"
              className="navigation-toggle"
            >
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
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        <dialog
          id="navigation-mobile-overlay"
          className="navigation-mobile-overlay"
        >
          <div className="navigation-overlay-header">
            <a href="/">
              <div aria-label="MK/ST Home" className="navigation-logo">
                <span className="navigation-logo-text">
                  <span>
                    {' '}
                    MK
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="navigation-thq-navigation-logo-accent-elm">
                    /
                  </span>
                  <span>
                    {' '}
                    ST
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </a>
            <button
              id="navigation-mobile-close"
              aria-label="Close menu"
              className="navigation-toggle"
            >
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
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <div className="navigation-overlay-links">
              <a href="#areas">
                <div className="navigation-overlay-link">
                  <span>Areas of Expertise</span>
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
                    <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </div>
              </a>
              <a href="#portfolio">
                <div className="navigation-overlay-link">
                  <span>Portfolio &amp; Cases</span>
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
                    <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </div>
              </a>
              <a href="#kpis">
                <div className="navigation-overlay-link">
                  <span>Performance Insights</span>
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
                    <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </div>
              </a>
              <a href="#testimonials">
                <div className="navigation-overlay-link">
                  <span>Success Stories</span>
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
                    <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="navigation-overlay-footer">
              <p className="section-subtitle">Ready to transform your data?</p>
              <a href="#contact">
                <div className="btn btn-primary btn-lg">
                  <span>Start a Consultation</span>
                </div>
              </a>
            </div>
          </div>
        </dialog>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-link::after, .navigation-overlay-link svg, .navigation-toggle {
  transition: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById("navigation-mobile-toggle")
  const mobileClose = document.getElementById("navigation-mobile-close")
  const mobileOverlay = document.getElementById("navigation-mobile-overlay")
  const overlayLinks = document.querySelectorAll(".navigation-overlay-link")

  const openMenu = () => {
    mobileOverlay.showModal()
    mobileToggle.setAttribute("aria-expanded", "true")
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    mobileOverlay.close()
    mobileToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  }

  mobileToggle.addEventListener("click", openMenu)
  mobileClose.addEventListener("click", closeMenu)

  overlayLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu()
    })
  })

  mobileOverlay.addEventListener("click", (e) => {
    if (e.target === mobileOverlay) {
      closeMenu()
    }
  })

  mobileOverlay.addEventListener("cancel", () => {
    mobileToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-text11 {
            color: var(--color-primary);
          }
          .navigation-thq-navigation-logo-accent-elm {
            color: var(--color-primary);
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
