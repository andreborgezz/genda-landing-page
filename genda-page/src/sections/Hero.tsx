import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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

type ServiceId = 'design' | 'limpeza'

const SERVICES: Array<{
  id: ServiceId
  name: string
  duration: string
  price: string
  selectedSlot: string
}> = [
  {
    id: 'design',
    name: 'Design de Sobrancelhas',
    duration: '60 min',
    price: 'R$ 160',
    selectedSlot: '10:00',
  },
  {
    id: 'limpeza',
    name: 'Limpeza de Pele',
    duration: '90 min',
    price: 'R$ 220',
    selectedSlot: '14:00',
  },
]

const TIME_SLOTS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'] as const

const CHIP_STATES = [
  {
    kind: 'pulse' as const,
    title: 'Novo agendamento!',
    subtitle: 'Mariana C. · 10:00',
  },
  {
    kind: 'check' as const,
    title: 'Link copiado',
    subtitle: 'genda.app/studio-aura',
  },
  {
    kind: 'check' as const,
    title: 'WhatsApp enviado',
    subtitle: 'Comprovante enviado',
  },
]

export function Hero() {
  const [allowFloat, setAllowFloat] = useState(false)
  const [activeService, setActiveService] = useState<ServiceId>('design')
  const [chipIndex, setChipIndex] = useState(0)
  const isSmallMobile = useWindowWidth() < 480

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setAllowFloat(!mq.matches)
    const onChange = () => setAllowFloat(!mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!allowFloat) {
      setActiveService('design')
      setChipIndex(0)
      return
    }

    const serviceTimer = window.setInterval(() => {
      setActiveService((prev) => (prev === 'design' ? 'limpeza' : 'design'))
    }, 3500)

    const chipTimer = window.setInterval(() => {
      setChipIndex((prev) => (prev + 1) % CHIP_STATES.length)
    }, 3000)

    return () => {
      window.clearInterval(serviceTimer)
      window.clearInterval(chipTimer)
    }
  }, [allowFloat])

  const selectedSlot = activeService === 'design' ? '10:00' : '14:00'
  const currentChip = CHIP_STATES[chipIndex]

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
              fontSize: 'clamp(34px, 5vw, 64px)',
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
            className="genda-hero-ctas"
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
            paddingTop: isSmallMobile ? '28px' : '16px',
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
                  {SERVICES.map((service) => {
                    const isSelected = activeService === service.id
                    return (
                      <motion.div
                        key={service.id}
                        animate={{
                          opacity: isSelected ? 1 : 0.85,
                          backgroundColor: isSelected
                            ? theme.colors.surface
                            : theme.colors.white,
                          borderColor: isSelected
                            ? theme.colors.blue
                            : theme.colors.bluePastel,
                        }}
                        transition={{ duration: 0.3, ease: EASE_OUT }}
                        style={{
                          borderStyle: 'solid',
                          borderWidth: isSelected ? '2px' : '1px',
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
                              fontWeight: isSelected ? 700 : 600,
                              color: theme.colors.blueDark,
                            }}
                          >
                            {service.name}
                          </div>
                          <div
                            style={{
                              fontSize: '12px',
                              color: theme.colors.textSecondary,
                            }}
                          >
                            {service.duration}
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
                          {service.price}
                        </div>
                      </motion.div>
                    )
                  })}
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
                  {TIME_SLOTS.map((time) => {
                    if (time === '11:00') {
                      return (
                        <div
                          key={time}
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
                          {time}
                        </div>
                      )
                    }

                    const isSelected = time === selectedSlot
                    return (
                      <motion.div
                        key={time}
                        animate={{
                          backgroundColor: isSelected
                            ? theme.colors.blue
                            : theme.colors.white,
                          color: isSelected
                            ? theme.colors.white
                            : theme.colors.blueDark,
                          borderColor: isSelected
                            ? theme.colors.blue
                            : theme.colors.bluePastel,
                        }}
                        transition={{ duration: 0.3, ease: EASE_OUT }}
                        style={{
                          borderStyle: 'solid',
                          borderWidth: '1px',
                          borderRadius: theme.radii.pill,
                          padding: '6px 10px',
                          fontSize: '13px',
                          fontWeight: isSelected ? 600 : 500,
                          textAlign: 'center',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {time}
                      </motion.div>
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
              transition={{ delay: 1.0, duration: 0.6, ease: EASE_OUT }}
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
                minWidth: isSmallMobile ? '200px' : '220px',
                maxWidth: isSmallMobile ? '240px' : '260px',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={chipIndex}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: DUR.base, ease: EASE_OUT }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: theme.colors.blueDark,
                      lineHeight: 1.25,
                    }}
                  >
                    {currentChip.kind === 'pulse' ? (
                      <span className="genda-pulse-dot" />
                    ) : (
                      <Check size={14} color={theme.colors.green} />
                    )}
                    <span>{currentChip.title}</span>
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: theme.colors.textSecondary,
                      marginTop: '2px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {currentChip.subtitle}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
