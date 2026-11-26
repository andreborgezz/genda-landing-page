import { motion } from 'framer-motion'
import { EASE_OUT } from '../lib/motion'
import { theme } from '../styles/theme'

export function Header() {
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
          background: theme.colors.white,
          border: `1px solid ${theme.colors.bluePastel}`,
          borderRadius: theme.radii.lg,
          boxShadow: '0 4px 24px rgba(30,58,138,0.08)',
          padding: '0 20px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
        }}
      >
        <a
          href="#"
          aria-label="Genda"
          style={{
            display: 'inline-flex',
            alignItems: 'baseline',
            fontSize: '20px',
            fontWeight: 800,
            color: theme.colors.blue,
            letterSpacing: '-0.04em',
            lineHeight: 1,
          }}
        >
          <span>genda</span>
          <span
            aria-hidden="true"
            style={{
              color: theme.colors.green,
              fontSize: '22px',
              lineHeight: 1,
            }}
          >
            ·
          </span>
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
          <span className="genda-arrow" aria-hidden="true">
            →
          </span>
        </a>
      </motion.header>
    </div>
  )
}
