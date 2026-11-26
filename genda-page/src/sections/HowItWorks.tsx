import { motion } from 'framer-motion'
import { CalendarCheck, Link2, Settings2 } from 'lucide-react'
import { SectionBadge } from '../components/SectionBadge'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { EASE_OUT, fadeIn, staggerContainer } from '../lib/motion'
import { theme } from '../styles/theme'

const STEPS = [
  {
    number: '01',
    icon: Settings2,
    title: 'Você configura',
    description:
      'Cadastre seu estúdio, adicione serviços e defina seus horários. Menos de 5 minutos.',
  },
  {
    number: '02',
    icon: Link2,
    title: 'Clientes agendam',
    description:
      'Compartilhe seu link. O cliente escolhe o serviço, o dia e o horário — sem criar conta, sem baixar nada. Só nome e WhatsApp.',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Você atende',
    description:
      'Veja sua agenda no painel. Confirme, conclua ou cancele. Sem planilha, sem papel.',
  },
] as const

export function HowItWorks() {
  const { ref: headerRef, inView: headerInView } = useScrollReveal()
  const { ref: gridRef, inView: gridInView } = useScrollReveal()

  return (
    <section
      id="como-funciona"
      style={{
        background: theme.colors.white,
        padding: '96px 24px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          style={{ textAlign: 'center' }}
        >
          <SectionBadge>Como funciona</SectionBadge>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 800,
              color: theme.colors.blueDark,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              textAlign: 'center',
            }}
          >
            Três passos. Pronto.
          </h2>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="genda-steps-grid"
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
        >
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <motion.article
                key={step.number}
                variants={fadeIn}
                style={{
                  background: theme.colors.pageBg,
                  border: `1px solid ${theme.colors.bluePastel}`,
                  borderRadius: theme.radii.xl,
                  padding: '36px 32px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    bottom: '-16px',
                    right: '16px',
                    fontSize: '100px',
                    fontWeight: 900,
                    color: theme.colors.bluePastel,
                    lineHeight: 1,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  }}
                >
                  {step.number}
                </span>

                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    background: theme.colors.bluePastel,
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  <Icon size={28} color={theme.colors.blue} aria-hidden="true" />
                </div>

                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: theme.colors.blueDark,
                    marginBottom: '10px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontSize: '15px',
                    color: theme.colors.textSecondary,
                    lineHeight: 1.65,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {step.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
