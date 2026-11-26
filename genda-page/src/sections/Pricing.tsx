import { useEffect, useRef, useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Copy, Globe } from 'lucide-react'
import { SectionBadge } from '../components/SectionBadge'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { DUR, EASE_OUT, pressable } from '../lib/motion'
import { theme } from '../styles/theme'

const PROMISES = ['Sem cartão', 'Setup em 5 min', 'Gratuito no beta'] as const

export function Pricing() {
  const { ref: headerRef, inView: headerInView } = useScrollReveal()
  const { ref: cardRef, inView: cardInView } = useScrollReveal()
  const [studioName, setStudioName] = useState('studio-aura')
  const [copied, setCopied] = useState(false)
  const copyTimerRef = useRef<number | null>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const slug =
    studioName
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'seu-studio'

  useEffect(() => {
    return () => {
      if (copyTimerRef.current !== null) {
        window.clearTimeout(copyTimerRef.current)
      }
    }
  }, [])

  const handleCopy = () => {
    navigator.clipboard?.writeText(`https://genda.app/${slug}`)
    setCopied(true)
    if (copyTimerRef.current !== null) {
      window.clearTimeout(copyTimerRef.current)
    }
    copyTimerRef.current = window.setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section
      id="precos"
      className="genda-section-pricing"
    >
      <div
        className="genda-dot-grid"
        aria-hidden="true"
        style={{ opacity: 0.3 }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          style={{ textAlign: 'center' }}
        >
          <SectionBadge>Preços</SectionBadge>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 800,
              color: theme.colors.blueDark,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            Estamos em beta.
          </h2>
          <p
            style={{
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              color: theme.colors.textSecondary,
              maxWidth: '480px',
              margin: '16px auto 0',
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            Em breve divulgaremos os planos e preços. Por enquanto, entre na
            lista de espera e garanta acesso antecipado.
          </p>
        </motion.div>

        <div className="genda-pricing-layout">
          <div className="genda-pricing-url-col">
            <div className="genda-pricing-url-card">
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: theme.colors.textSecondary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Seu endereço no Genda
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '4px',
                  marginTop: '12px',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontSize: 'clamp(18px, 2.5vw, 28px)',
                    fontWeight: 700,
                    color: theme.colors.textSecondary,
                  }}
                >
                  genda.app/
                </span>
                <input
                  type="text"
                  value={studioName}
                  onChange={(e) => setStudioName(e.target.value)}
                  placeholder="seu-studio"
                  maxLength={40}
                  className="genda-slug-input"
                  aria-label="Nome do seu estúdio"
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  borderRadius: '10px',
                  background: theme.colors.pageBg,
                  border: `1px solid ${theme.colors.bluePastel}`,
                  padding: '10px 14px',
                  marginTop: '20px',
                  flexWrap: 'wrap',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    color: theme.colors.blue,
                    fontWeight: 600,
                    minWidth: 0,
                    wordBreak: 'break-all',
                  }}
                >
                  <Globe
                    size={15}
                    color={theme.colors.blue}
                    style={{ flexShrink: 0 }}
                    aria-hidden="true"
                  />
                  <span>genda.app/{slug}</span>
                </div>
                <motion.button
                  type="button"
                  onClick={handleCopy}
                  whileTap={{
                    scale: 0.96,
                    transition: { duration: DUR.press, ease: EASE_OUT },
                  }}
                  style={{
                    background: copied ? theme.colors.green : theme.colors.blue,
                    color: theme.colors.white,
                    border: 'none',
                    borderRadius: theme.radii.pill,
                    padding: '4px 14px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    transition: 'background 200ms ease',
                    flexShrink: 0,
                  }}
                  aria-label={copied ? 'Link copiado' : 'Copiar link'}
                >
                  {copied ? (
                    <Check size={12} aria-hidden="true" />
                  ) : (
                    <Copy size={12} aria-hidden="true" />
                  )}
                  <span>{copied ? 'Copiado!' : 'Copiar'}</span>
                </motion.button>
              </div>
            </div>
          </div>

          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            animate={
              cardInView
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: 32, scale: 0.96 }
            }
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="genda-pricing-card"
          >
            <div
              style={{
                width: '56px',
                height: '56px',
                background: theme.colors.bluePastel,
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.colors.blue,
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </div>

            <div>
              <span
                className="genda-ring-pulse"
                style={{
                  display: 'inline-block',
                  background: `linear-gradient(135deg, ${theme.colors.bluePastel}, ${theme.colors.hoverSoft})`,
                  color: theme.colors.blue,
                  borderRadius: theme.radii.pill,
                  padding: '6px 18px',
                  fontSize: '14px',
                  fontWeight: 600,
                  marginTop: '16px',
                }}
              >
                Gratuito durante o beta
              </span>
            </div>

            <h3
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: theme.colors.blueDark,
                marginTop: '20px',
                lineHeight: 1.3,
                letterSpacing: '-0.015em',
              }}
            >
              Entre na lista de espera e garanta acesso antecipado.
            </h3>

            {submitted ? (
              <motion.div
                role="status"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: DUR.base, ease: EASE_OUT }}
                style={{
                  marginTop: '28px',
                  padding: '14px 20px',
                  borderRadius: theme.radii.pill,
                  background: theme.colors.surface,
                  border: `1px solid ${theme.colors.green}`,
                  color: theme.colors.greenDark,
                  fontSize: '15px',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  width: '100%',
                }}
              >
                <Check size={18} color={theme.colors.green} aria-hidden="true" />
                <span>Você está na lista!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="genda-waitlist-form">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  aria-label="Seu melhor e-mail"
                  className="genda-waitlist-input"
                />
                <motion.button
                  type="submit"
                  className="genda-waitlist-btn"
                  whileTap={pressable.whileTap}
                >
                  <span>Entrar na lista</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </motion.button>
              </form>
            )}

            <p
              style={{
                fontSize: '13px',
                color: theme.colors.textSecondary,
                marginTop: '16px',
              }}
            >
              Gratuito durante o beta. Sem cartão de crédito.
            </p>
          </motion.div>
        </div>

        <div className="genda-pricing-promises">
          {PROMISES.map((promise) => (
            <div
              key={promise}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 500,
                color: theme.colors.textSecondary,
              }}
            >
              <Check size={16} color={theme.colors.green} aria-hidden="true" />
              <span>{promise}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
