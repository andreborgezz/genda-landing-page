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
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '16px 24px 0',
      }}
    >
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.1 }}
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          background: scrolled ? 'rgba(255, 255, 255, 0.85)' : theme.colors.white,
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          border: `1px solid ${theme.colors.bluePastel}`,
          borderRadius: theme.radii.lg,
          boxShadow: '0 4px 24px rgba(30,58,138,0.08)',
          padding: '0 20px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          transition: 'background-color 200ms ease',
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
            height={32}
            style={{ display: 'block', width: 'auto' }}
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
