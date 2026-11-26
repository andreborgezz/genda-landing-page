import { motion } from 'framer-motion'
import { Eye, Heart, Scissors, Smile, Sparkles, Zap } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { EASE_OUT, fadeIn, staggerContainer } from '../lib/motion'
import { theme } from '../styles/theme'

const PROFESSIONS = [
  {
    icon: Scissors,
    title: 'Esteticistas',
    description: 'Sua agenda no link. Clientes agendam direto.',
  },
  {
    icon: Zap,
    title: 'Barbeiros',
    description: "Sem WhatsApp lotado de 'tem vaga?'",
  },
  {
    icon: Sparkles,
    title: 'Manicures',
    description: 'Agenda organizada, sem papel e sem planilha.',
  },
  {
    icon: Eye,
    title: 'Designer de sobrancelhas',
    description: 'Link único. Cliente agenda. Você atende.',
  },
  {
    icon: Smile,
    title: 'Maquiadoras',
    description: 'Horários livres visíveis. Zero double-booking.',
  },
  {
    icon: Heart,
    title: 'Depiladores',
    description: 'Painel simples. Funciona em qualquer celular.',
  },
] as const

export function ForWho() {
  const { ref: headerRef, inView: headerInView } = useScrollReveal()
  const { ref: gridRef, inView: gridInView } = useScrollReveal()

  return (
    <section
      id="para-quem"
      className="genda-section-forwho"
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          style={{ textAlign: 'center' }}
        >
          <span
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.7)',
              borderRadius: theme.radii.pill,
              padding: '5px 14px',
              fontSize: '13px',
              fontWeight: 600,
              marginBottom: '16px',
            }}
          >
            Para quem é
          </span>

          <h2
            style={{
              fontSize: 'clamp(30px, 5vw, 60px)',
              fontWeight: 800,
              color: theme.colors.white,
              letterSpacing: '-0.03em',
              lineHeight: 1.08,
            }}
          >
            Para quem vive de atender.
          </h2>

          <p
            style={{
              fontSize: 'clamp(13px, 3vw, 16px)',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.04em',
              marginTop: '12px',
              lineHeight: 1.6,
            }}
          >
            Estética · Beleza · Barbearia · Manicure · Sobrancelha · Depilação ·
            Maquiagem
          </p>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="genda-forwho-grid"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
        >
          {PROFESSIONS.map((item) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                variants={fadeIn}
                className="genda-forwho-card"
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(29,78,216,0.25)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon
                    size={24}
                    color={theme.colors.blueLight}
                    aria-hidden="true"
                  />
                </div>

                <h3
                  style={{
                    fontSize: '17px',
                    fontWeight: 700,
                    color: theme.colors.white,
                    marginTop: '14px',
                    marginBottom: '6px',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.55,
                  }}
                >
                  {item.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>

        <p
          style={{
            marginTop: '48px',
            textAlign: 'center',
            fontSize: '18px',
            color: 'rgba(255,255,255,0.4)',
            fontStyle: 'italic',
          }}
        >
          Se você cobra por hora de trabalho, o Genda é para você.
        </p>
      </div>
    </section>
  )
}
