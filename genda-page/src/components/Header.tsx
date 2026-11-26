import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { EASE_OUT } from '../lib/motion'
import { theme } from '../styles/theme'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="genda-header-wrap">
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
        className="genda-header-bar"
        style={{
          background: scrolled ? 'rgba(255, 255, 255, 0.85)' : theme.colors.white,
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <a
          href="#"
          aria-label="Genda"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <img
            src="/genda-logo-horizontal-dots.svg"
            alt="Genda"
            className="genda-header-logo"
          />
        </a>

        <nav className="genda-nav-links" aria-label="Navegação principal">
          <a className="genda-nav-link" href="#como-funciona">
            Como funciona
          </a>
          <a className="genda-nav-link" href="#funcionalidades">
            Funcionalidades
          </a>
          <a className="genda-nav-link" href="#precos">
            Preços
          </a>
        </nav>

        <a className="genda-header-cta" href="#precos">
          <span>Entrar na lista</span>
        </a>
      </motion.header>
    </div>
  )
}
