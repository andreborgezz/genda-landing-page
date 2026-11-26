import { motion } from 'framer-motion'
import {
  Clock,
  LayoutDashboard,
  Link2,
  MessageCircle,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'
import { SectionBadge } from '../components/SectionBadge'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { DUR, EASE_OUT, fadeIn, staggerContainer } from '../lib/motion'
import { theme } from '../styles/theme'

const FEATURES = [
  {
    icon: Link2,
    title: 'Sua página, sua identidade',
    description:
      'Crie um link como genda.app/studio-aura com logo, cores e serviços do seu estúdio. Compartilhe onde quiser.',
  },
  {
    icon: Smartphone,
    title: 'Zero fricção para quem agenda',
    description:
      'O cliente não cria conta, não baixa nada. Acessa pelo navegador e confirma em segundos.',
  },
  {
    icon: ShieldCheck,
    title: 'Sem conflito de horário, nunca',
    description:
      'O sistema bloqueia conflitos automaticamente. Dois clientes não conseguem o mesmo horário.',
  },
  {
    icon: Clock,
    title: 'Trabalhe nos seus termos',
    description:
      'Defina dias, horários, intervalo de almoço e bloqueios pontuais para feriados ou folgas.',
  },
  {
    icon: LayoutDashboard,
    title: 'Visão do dia ou do mês',
    description:
      'Veja o que tem no dia, quanto vai faturar e quais horários estão livres — de qualquer dispositivo.',
  },
  {
    icon: MessageCircle,
    title: 'Cliente sempre informado',
    description:
      'Depois de agendar, o cliente envia o comprovante direto no WhatsApp com um clique.',
  },
] as const

export function Features() {
  const { ref: headerRef, inView: headerInView } = useScrollReveal()
  const { ref: gridRef, inView: gridInView } = useScrollReveal()

  return (
    <section
      id="funcionalidades"
      style={{
        background: `linear-gradient(180deg, ${theme.colors.pageBg} 0%, ${theme.colors.white} 100%)`,
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
          <SectionBadge>Funcionalidades</SectionBadge>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              color: theme.colors.blueDark,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              maxWidth: '600px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            Tudo que você precisa. Nada que você não precisa.
          </h2>
        </motion.div>

        <motion.div
          ref={gridRef}
          className="genda-features-grid"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.article
                key={feature.title}
                variants={fadeIn}
                whileHover={{
                  y: -4,
                  boxShadow: theme.shadows.cardHover,
                  transition: { duration: DUR.base, ease: EASE_OUT },
                }}
                style={{
                  background: theme.colors.white,
                  border: `1px solid ${theme.colors.bluePastel}`,
                  borderRadius: theme.radii.xl,
                  padding: '28px',
                  cursor: 'default',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    background: theme.colors.bluePastel,
                    borderRadius: theme.radii.md,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={22} color={theme.colors.blue} aria-hidden="true" />
                </div>

                <h3
                  style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: theme.colors.blueDark,
                    marginTop: '16px',
                    marginBottom: '8px',
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: theme.colors.textSecondary,
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </p>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
