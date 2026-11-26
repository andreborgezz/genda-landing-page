import { motion } from 'framer-motion'
import { ArrowRight, Compass, Globe, MessageCircle } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import {
  DUR,
  EASE_OUT,
  fadeIn,
  fadeInUp,
  pressable,
  staggerContainer,
} from '../lib/motion'
import { theme } from '../styles/theme'

export function CTA() {
  const { ref, inView } = useScrollReveal()

  return (
    <section
      style={{
        background: `linear-gradient(135deg, ${theme.colors.blue} 0%, ${theme.colors.blueDark} 100%)`,
        padding: '96px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.03)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'rgba(29,78,216,0.3)',
          top: '-100px',
          right: '-100px',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(16,185,129,0.15)',
          bottom: '-60px',
          left: '-60px',
          pointerEvents: 'none',
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          bottom: '40px',
          right: '10%',
          pointerEvents: 'none',
        }}
      />

      <motion.div
        ref={ref}
        variants={staggerContainer(0.12)}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
        style={{
          maxWidth: '580px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.span
          variants={fadeIn}
          style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.9)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: theme.radii.pill,
            padding: '5px 16px',
            fontSize: '13px',
            fontWeight: 500,
          }}
        >
          Em beta · Acesso gratuito
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 800,
            color: theme.colors.white,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginTop: '20px',
          }}
        >
          Pronto para sair da agenda manual?
        </motion.h2>

        <motion.p
          variants={fadeIn}
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.7)',
            marginTop: '16px',
          }}
        >
          Entre na lista de espera. Seja um dos primeiros a usar.
        </motion.p>

        <motion.div variants={fadeIn}>
          <motion.a
            href="#precos"
            className="genda-cta-final-btn"
            whileHover={{
              y: -2,
              transition: { duration: DUR.fast, ease: EASE_OUT },
            }}
            whileTap={pressable.whileTap}
          >
            <span>Quero entrar na lista</span>
            <span
              aria-hidden="true"
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: theme.colors.bluePastel,
                color: theme.colors.blue,
                display: 'inline-grid',
                placeItems: 'center',
              }}
            >
              <ArrowRight size={14} />
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeIn}
          style={{
            marginTop: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            aria-hidden="true"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            <MessageCircle size={20} />
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <Globe size={20} />
            <Compass size={20} />
          </div>
          <span
            style={{
              fontSize: '12px',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            Funciona em qualquer navegador
          </span>
        </motion.div>

        <motion.p
          variants={fadeIn}
          style={{
            fontSize: '13px',
            color: 'rgba(255,255,255,0.5)',
            marginTop: '20px',
          }}
        >
          Dúvidas? Fale com a gente —{' '}
          <a
            href="mailto:borges01andre@gmail.com"
            className="genda-cta-support-link"
          >
            borges01andre@gmail.com
          </a>{' '}
          ·{' '}
          <a href="tel:+5515997591714" className="genda-cta-support-link">
            (15) 99759-1714
          </a>
        </motion.p>
      </motion.div>
    </section>
  )
}
