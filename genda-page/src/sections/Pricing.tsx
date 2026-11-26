import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { SectionBadge } from '../components/SectionBadge'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { DUR, EASE_OUT, pressable } from '../lib/motion'
import { theme } from '../styles/theme'

const PROMISES = ['Sem cartão', 'Setup em 5 min', 'Gratuito no beta'] as const

export function Pricing() {
  const { ref: headerRef, inView: headerInView } = useScrollReveal()
  const { ref: cardRef, inView: cardInView } = useScrollReveal()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section
      id="precos"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: theme.colors.pageBg,
        padding: '96px 24px',
      }}
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
              fontSize: '18px',
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
            <div
              style={{
                background: theme.colors.white,
                border: `1px solid ${theme.colors.bluePastel}`,
                borderRadius: theme.radii.xl,
                padding: '28px 32px',
                boxShadow: theme.shadows.card,
                width: '100%',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: theme.colors.textSecondary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '12px',
                }}
              >
                Seu endereço no Genda
              </div>
              <div
                style={{
                  fontSize: 'clamp(20px, 3vw, 32px)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                  wordBreak: 'break-word',
                }}
              >
                <span style={{ color: theme.colors.textSecondary }}>
                  genda.app/
                </span>
                <span style={{ color: theme.colors.blue }}>studio-aura</span>
                <span className="genda-cursor-blink" aria-hidden="true">
                  |
                </span>
              </div>
              <p
                style={{
                  fontSize: '15px',
                  color: theme.colors.textSecondary,
                  marginTop: '14px',
                  maxWidth: '380px',
                  lineHeight: 1.6,
                }}
              >
                Um link curto com a identidade do seu estúdio para o cliente
                escolher serviço, dia e horário sem sair do navegador.
              </p>
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
