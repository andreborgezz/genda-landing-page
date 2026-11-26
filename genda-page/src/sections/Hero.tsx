import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Check } from 'lucide-react'
import { useWindowWidth } from '../hooks/useWindowWidth'
import {
  DUR,
  EASE_OUT,
  fadeIn,
  heroBlurInUp,
  pressable,
  scaleIn,
  staggerContainer,
} from '../lib/motion'
import { theme } from '../styles/theme'

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
      <div
        className="genda-dot-grid"
        aria-hidden="true"
        style={{ opacity: 0.6 }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, transparent 60%, #F8F9FF 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

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
            variants={heroBlurInUp}
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
                display: 'inline-block',
                position: 'relative',
                fontStyle: 'italic',
                color: theme.colors.blue,
                marginTop: '4px',
              }}
            >
              <span>Sem app.</span>
              <span className="genda-hero-underline" aria-hidden="true" />
            </span>
            <span
              style={{
                display: 'block',
                fontStyle: 'italic',
                color: theme.colors.blue,
                marginTop: '4px',
              }}
            >
              Sem senha.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            style={{
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: theme.colors.textSecondary,
              lineHeight: 1.65,
              maxWidth: '440px',
              marginTop: '22px',
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
              whileHover={{
                y: -1,
                transition: { duration: DUR.fast, ease: EASE_OUT },
              }}
              whileTap={pressable.whileTap}
            >
              <span>Entrar na lista de espera</span>
              <span
                aria-hidden="true"
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'inline-grid',
                  placeItems: 'center',
                }}
              >
                <ArrowRight size={14} />
              </span>
            </motion.a>
            <motion.a
              href="#como-funciona"
              className="genda-hero-secondary"
              whileTap={pressable.whileTap}
            >
              <span>Ver como funciona</span>
              <ArrowDown size={16} aria-hidden="true" />
            </motion.a>
          </motion.div>

          <motion.p
            variants={fadeIn}
            style={{
              fontSize: '13px',
              color: theme.colors.textSecondary,
              marginTop: '24px',
            }}
          >
            Acesso antecipado. Gratuito durante o beta.
          </motion.p>
        </motion.div>

        <div
          aria-hidden="true"
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: isSmallMobile ? '20px' : '16px',
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
            {!isSmallMobile && (
              <span
                style={{
                  position: 'absolute',
                  fontSize: '200px',
                  fontWeight: 900,
                  color: theme.colors.bluePastel,
                  opacity: 0.4,
                  right: '-20px',
                  top: '-40px',
                  pointerEvents: 'none',
                  userSelect: 'none',
                  zIndex: 0,
                  lineHeight: 1,
                }}
              >
                01
              </span>
            )}

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
                zIndex: 0,
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: DUR.hero, delay: 0.4, ease: EASE_OUT }}
              style={{ position: 'relative', zIndex: 1 }}
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
                            padding: '6px 10px',
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
                            padding: '6px 10px',
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
                          padding: '6px 10px',
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

            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.6, ease: EASE_OUT }}
              style={{
                position: 'absolute',
                top: isSmallMobile ? '-18px' : '-20px',
                right: isSmallMobile ? '0px' : '-20px',
                zIndex: 3,
                background: theme.colors.white,
                border: `1px solid ${theme.colors.bluePastel}`,
                borderRadius: theme.radii.md,
                padding: '10px 14px',
                boxShadow: theme.shadows.card,
                fontSize: '13px',
                maxWidth: isSmallMobile ? '250px' : '290px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontWeight: 700,
                  color: theme.colors.blueDark,
                }}
              >
                <span className="genda-pulse-dot" />
                <span>Novo agendamento!</span>
              </div>
              <div
                style={{
                  color: theme.colors.textSecondary,
                  fontSize: '12px',
                  marginTop: '2px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                Mariana C. · Design de Sobrancelhas · 10:00
              </div>
            </motion.div>

            <div className="genda-hero-floating-badges">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={
                  allowFloat
                    ? { opacity: 1, x: 0, y: [0, -5, 0] }
                    : { opacity: 1, x: 0 }
                }
                transition={
                  allowFloat
                    ? {
                        opacity: { duration: 0.6, delay: 1.1, ease: EASE_OUT },
                        x: { duration: 0.6, delay: 1.1, ease: EASE_OUT },
                        y: {
                          duration: 3.6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1.7,
                        },
                      }
                    : { duration: 0.6, delay: 1.1, ease: EASE_OUT }
                }
                style={{
                  position: 'absolute',
                  bottom: '30%',
                  left: '-60px',
                  zIndex: 3,
                  background: theme.colors.green,
                  color: theme.colors.white,
                  borderRadius: theme.radii.pill,
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  boxShadow: theme.shadows.card,
                  whiteSpace: 'nowrap',
                }}
              >
                Link copiado!
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={
                  allowFloat
                    ? { opacity: 1, x: 0, y: [0, -4, 0] }
                    : { opacity: 1, x: 0 }
                }
                transition={
                  allowFloat
                    ? {
                        opacity: { duration: 0.6, delay: 1.3, ease: EASE_OUT },
                        x: { duration: 0.6, delay: 1.3, ease: EASE_OUT },
                        y: {
                          duration: 4.2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 2.0,
                        },
                      }
                    : { duration: 0.6, delay: 1.3, ease: EASE_OUT }
                }
                style={{
                  position: 'absolute',
                  bottom: '10%',
                  left: '-40px',
                  zIndex: 3,
                  background: theme.colors.white,
                  color: theme.colors.greenDark,
                  border: `1px solid ${theme.colors.green}`,
                  borderRadius: theme.radii.pill,
                  padding: '6px 14px',
                  fontSize: '12px',
                  fontWeight: 600,
                  boxShadow: theme.shadows.card,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>WhatsApp enviado</span>
                <Check size={13} color={theme.colors.green} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
