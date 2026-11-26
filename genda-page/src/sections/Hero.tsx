import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useWindowWidth } from '../hooks/useWindowWidth'
import {
  DUR,
  EASE_OUT,
  fadeIn,
  fadeInUp,
  pressable,
  scaleIn,
  staggerContainer,
} from '../lib/motion'
import { theme } from '../styles/theme'

const AVATARS = [
  { initials: 'MC', bg: theme.colors.bluePastel },
  { initials: 'RS', bg: theme.colors.hoverSoft },
  { initials: 'CF', bg: theme.colors.bluePastel },
]

const TIME_SLOTS = [
  { time: '09:00', status: 'available' },
  { time: '10:00', status: 'selected' },
  { time: '11:00', status: 'unavailable' },
  { time: '14:00', status: 'available' },
  { time: '15:00', status: 'available' },
  { time: '16:00', status: 'available' },
] as const

export function Hero() {
  const [allowFloat, setAllowFloat] = useState(false)
  const isSmallMobile = useWindowWidth() < 480

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setAllowFloat(!mq.matches)
    const onChange = () => setAllowFloat(!mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <section className="genda-hero-section">
      <div className="genda-hero-inner">
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={scaleIn}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: `linear-gradient(135deg, ${theme.colors.bluePastel}, ${theme.colors.hoverSoft})`,
              color: theme.colors.blue,
              border: `1px solid ${theme.colors.bluePastel}`,
              borderRadius: theme.radii.pill,
              padding: '5px 14px',
              fontSize: '13px',
              fontWeight: 600,
            }}
          >
            <span className="genda-pulse-dot" aria-hidden="true" />
            <span>Em beta · em breve para todos</span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            style={{
              marginTop: '20px',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            <span style={{ display: 'block', color: theme.colors.blueDark }}>
              Sua agenda online.
            </span>
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                color: theme.colors.blue,
              }}
            >
              Sem app. Sem senha.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: theme.colors.textSecondary,
              lineHeight: 1.65,
              maxWidth: '440px',
              marginTop: '20px',
            }}
          >
            Clientes agendam pelo seu link direto — só nome e WhatsApp. Você
            gerencia tudo em um painel simples, de qualquer tela.
          </motion.p>

          <motion.div
            variants={fadeIn}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginTop: '32px',
            }}
          >
            <motion.a
              href="#precos"
              className="genda-hero-primary"
              whileHover={{ y: -1, transition: { duration: DUR.fast, ease: EASE_OUT } }}
              whileTap={pressable.whileTap}
            >
              Entrar na lista de espera
            </motion.a>
            <motion.a
              href="#como-funciona"
              className="genda-hero-secondary"
              whileTap={pressable.whileTap}
            >
              Ver como funciona ↓
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeIn}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '32px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }} aria-hidden="true">
              {AVATARS.map((avatar, index) => (
                <span
                  key={avatar.initials}
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    border: `2px solid ${theme.colors.pageBg}`,
                    background: avatar.bg,
                    color: theme.colors.blueTitle,
                    fontSize: '11px',
                    fontWeight: 700,
                    display: 'grid',
                    placeItems: 'center',
                    marginLeft: index === 0 ? 0 : '-8px',
                    flexShrink: 0,
                  }}
                >
                  {avatar.initials}
                </span>
              ))}
            </div>
            <p
              style={{
                fontSize: '13px',
                color: theme.colors.textSecondary,
                lineHeight: 1.4,
              }}
            >
              Profissionais de estética, beleza e barbearia testando agora.
            </p>
          </motion.div>
        </motion.div>

        <div
          aria-hidden="true"
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: isSmallMobile ? '280px' : '100%',
              maxWidth: isSmallMobile ? '100%' : '360px',
              margin: isSmallMobile ? '0 auto' : undefined,
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: '85%',
                height: '85%',
                bottom: isSmallMobile ? '-10px' : '-16px',
                right: isSmallMobile ? '-8px' : '-16px',
                background: theme.colors.bluePastel,
                borderRadius: theme.radii.xl,
                transform: 'rotate(3deg)',
                opacity: 0.5,
                pointerEvents: 'none',
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: DUR.hero, delay: 0.4, ease: EASE_OUT }}
              style={{ position: 'relative' }}
            >
              <motion.div
                animate={allowFloat ? { y: [0, -8, 0] } : undefined}
                transition={
                  allowFloat
                    ? {
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1.5,
                      }
                    : undefined
                }
                style={{
                  background: theme.colors.white,
                  borderRadius: theme.radii.xl,
                  boxShadow: theme.shadows.card,
                  border: `1px solid ${theme.colors.bluePastel}`,
                  padding: '24px',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: theme.colors.blue,
                      color: theme.colors.white,
                      display: 'grid',
                      placeItems: 'center',
                      fontSize: '14px',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    A
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: '15px',
                        color: theme.colors.blueDark,
                        lineHeight: 1.2,
                      }}
                    >
                      Studio Aura
                    </div>
                    <div
                      style={{
                        color: theme.colors.textSecondary,
                        fontSize: '12px',
                        lineHeight: 1.3,
                      }}
                    >
                      Estética &amp; Beleza
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    height: '1px',
                    background: theme.colors.bluePastel,
                    margin: '16px 0',
                  }}
                />

                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: theme.colors.textSecondary,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '10px',
                  }}
                >
                  Escolha o serviço
                </div>

                <div style={{ display: 'grid', gap: '8px' }}>
                  <div
                    style={{
                      border: `2px solid ${theme.colors.blue}`,
                      background: theme.colors.surface,
                      borderRadius: theme.radii.md,
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: 700,
                          color: theme.colors.blueDark,
                        }}
                      >
                        Design de Sobrancelhas
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: theme.colors.textSecondary,
                        }}
                      >
                        60 min
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: theme.colors.blueTitle,
                        fontVariantNumeric: 'tabular-nums',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      R$ 160
                    </div>
                  </div>

                  <div
                    style={{
                      border: `1px solid ${theme.colors.bluePastel}`,
                      background: theme.colors.white,
                      borderRadius: theme.radii.md,
                      padding: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: theme.colors.blueDark,
                        }}
                      >
                        Limpeza de Pele
                      </div>
                      <div
                        style={{
                          fontSize: '12px',
                          color: theme.colors.textSecondary,
                        }}
                      >
                        90 min
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        color: theme.colors.blueTitle,
                        fontVariantNumeric: 'tabular-nums',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      R$ 220
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: theme.colors.textSecondary,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginTop: '16px',
                    marginBottom: '10px',
                  }}
                >
                  Escolha o horário
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px',
                  }}
                >
                  {TIME_SLOTS.map((slot) => {
                    if (slot.status === 'selected') {
                      return (
                        <div
                          key={slot.time}
                          style={{
                            background: theme.colors.blue,
                            color: theme.colors.white,
                            borderRadius: theme.radii.pill,
                            padding: '6px 14px',
                            fontSize: '13px',
                            fontWeight: 600,
                            textAlign: 'center',
                            fontVariantNumeric: 'tabular-nums',
                          }}
                        >
                          {slot.time}
                        </div>
                      )
                    }

                    if (slot.status === 'unavailable') {
                      return (
                        <div
                          key={slot.time}
                          style={{
                            color: theme.colors.blueLight,
                            textDecoration: 'line-through',
                            border: `1px dashed ${theme.colors.bluePastel}`,
                            borderRadius: theme.radii.pill,
                            padding: '6px 14px',
                            fontSize: '13px',
                            fontWeight: 500,
                            textAlign: 'center',
                            fontVariantNumeric: 'tabular-nums',
                          }}
                        >
                          {slot.time}
                        </div>
                      )
                    }

                    return (
                      <div
                        key={slot.time}
                        className="genda-slot-available"
                        style={{
                          borderRadius: theme.radii.pill,
                          padding: '6px 14px',
                          fontSize: '13px',
                          fontWeight: 500,
                          textAlign: 'center',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {slot.time}
                      </div>
                    )
                  })}
                </div>

                <div
                  style={{
                    background: theme.colors.blue,
                    color: theme.colors.white,
                    borderRadius: theme.radii.pill,
                    width: '100%',
                    padding: '12px',
                    fontSize: '14px',
                    fontWeight: 700,
                    marginTop: '16px',
                    textAlign: 'center',
                  }}
                >
                  Confirmar agendamento
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
