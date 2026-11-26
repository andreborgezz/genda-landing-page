import { motion } from 'framer-motion'
import {
  Check,
  Clock,
  Globe,
  LayoutDashboard,
  Link2,
  MessageCircle,
  ShieldCheck,
  Smartphone,
  X,
} from 'lucide-react'
import { SectionBadge } from '../components/SectionBadge'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { DUR, EASE_OUT, fadeIn, staggerContainer } from '../lib/motion'
import { theme } from '../styles/theme'

const NOISE_SVG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`

export function Features() {
  const { ref: headerRef, inView: headerInView } = useScrollReveal()
  const { ref: gridRef, inView: gridInView } = useScrollReveal()

  return (
    <section
      id="funcionalidades"
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: `linear-gradient(180deg, ${theme.colors.pageBg} 0%, ${theme.colors.white} 100%)`,
        padding: '88px 24px 64px',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: NOISE_SVG,
          pointerEvents: 'none',
          zIndex: 0,
        }}
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
          className="genda-features-bento"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          animate={gridInView ? 'show' : 'hidden'}
        >
          <motion.article
            variants={fadeIn}
            className="genda-bento-wide"
            whileHover={{
              y: -4,
              boxShadow: theme.shadows.cardHover,
              transition: { duration: DUR.base, ease: EASE_OUT },
            }}
            style={{
              background: theme.colors.white,
              border: `1px solid ${theme.colors.bluePastel}`,
              borderRadius: theme.radii.xl,
              padding: '32px',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
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
                <Link2 size={22} color={theme.colors.blue} aria-hidden="true" />
              </div>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: theme.colors.blueDark,
                  marginTop: '18px',
                  marginBottom: '8px',
                }}
              >
                Sua página, sua identidade
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: theme.colors.textSecondary,
                  lineHeight: 1.65,
                  maxWidth: '520px',
                }}
              >
                Crie um link exclusivo com o nome, a logo, as cores e o catálogo
                de serviços do seu estúdio. Coloque na bio do Instagram, no
                status do WhatsApp ou onde o cliente já fala com você.
              </p>
            </div>

            <div
              aria-hidden="true"
              style={{
                borderRadius: '10px',
                background: theme.colors.pageBg,
                border: `1px solid ${theme.colors.bluePastel}`,
                padding: '10px 14px',
                marginTop: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
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
                }}
              >
                <Globe size={15} color={theme.colors.blue} />
                <span>genda.app/studio-aura</span>
              </div>
              <span
                style={{
                  background: theme.colors.bluePastel,
                  color: theme.colors.blueTitle,
                  borderRadius: theme.radii.pill,
                  padding: '3px 10px',
                  fontSize: '11px',
                  fontWeight: 700,
                }}
              >
                Link ativo
              </span>
            </div>
          </motion.article>

          <motion.article
            variants={fadeIn}
            className="genda-bento-narrow"
            whileHover={{
              y: -4,
              boxShadow: theme.shadows.cardHover,
              transition: { duration: DUR.base, ease: EASE_OUT },
            }}
            style={{
              background: theme.colors.white,
              border: `1px solid ${theme.colors.bluePastel}`,
              borderRadius: theme.radii.xl,
              padding: '32px',
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
              <Smartphone size={22} color={theme.colors.blue} aria-hidden="true" />
            </div>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: theme.colors.blueDark,
                marginTop: '18px',
                marginBottom: '8px',
              }}
            >
              Zero fricção para quem agenda
            </h3>

            <p
              style={{
                fontSize: '14px',
                color: theme.colors.textSecondary,
                lineHeight: 1.65,
              }}
            >
              O cliente não cria conta, não baixa aplicativo e não precisa
              lembrar senha. Acessa pelo navegador do celular e confirma em
              segundos só com nome e WhatsApp.
            </p>
          </motion.article>

          <motion.article
            variants={fadeIn}
            className="genda-bento-narrow"
            whileHover={{
              y: -4,
              boxShadow: theme.shadows.cardHover,
              transition: { duration: DUR.base, ease: EASE_OUT },
            }}
            style={{
              background: theme.colors.white,
              border: `1px solid ${theme.colors.bluePastel}`,
              borderRadius: theme.radii.xl,
              padding: '32px',
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
              <Clock size={22} color={theme.colors.blue} aria-hidden="true" />
            </div>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: theme.colors.blueDark,
                marginTop: '18px',
                marginBottom: '8px',
              }}
            >
              Trabalhe nos seus termos
            </h3>

            <p
              style={{
                fontSize: '14px',
                color: theme.colors.textSecondary,
                lineHeight: 1.65,
              }}
            >
              Defina dias da semana, horários de atendimento, duração de cada
              serviço, intervalo de almoço e bloqueios pontuais para feriados ou
              folgas.
            </p>
          </motion.article>

          <motion.article
            variants={fadeIn}
            className="genda-bento-wide"
            whileHover={{
              y: -4,
              boxShadow: '0 20px 40px -8px rgba(0,0,0,0.4)',
              transition: { duration: DUR.base, ease: EASE_OUT },
            }}
            style={{
              background: theme.colors.blueDark,
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: theme.radii.xl,
              padding: '32px',
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: theme.radii.md,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ShieldCheck
                  size={22}
                  color={theme.colors.blueLight}
                  aria-hidden="true"
                />
              </div>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: theme.colors.white,
                  marginTop: '18px',
                  marginBottom: '8px',
                }}
              >
                Sem conflito de horário, nunca
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.65,
                  maxWidth: '520px',
                }}
              >
                O sistema faz bloqueio transacional por estabelecimento e data.
                Mesmo que dois clientes abram o link ao mesmo tempo, apenas um
                consegue reservar aquele horário.
              </p>
            </div>

            <div
              aria-hidden="true"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '10px',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  background: 'rgba(16,185,129,0.15)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: theme.colors.white,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    10:00 · Mariana C.
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#6EE7B7', // contrast token specified in task 009
                      fontWeight: 600,
                    }}
                  >
                    Confirmado
                  </div>
                </div>
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: theme.colors.green,
                    color: theme.colors.white,
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Check size={14} />
                </span>
              </div>

              <div
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px dashed rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'line-through',
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    10:00 · tentativa
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: 'rgba(255,255,255,0.4)',
                      fontWeight: 600,
                    }}
                  >
                    Bloqueado
                  </div>
                </div>
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.4)',
                    display: 'grid',
                    placeItems: 'center',
                    flexShrink: 0,
                  }}
                >
                  <X size={14} />
                </span>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={fadeIn}
            className="genda-bento-half"
            whileHover={{
              y: -4,
              boxShadow: theme.shadows.cardHover,
              transition: { duration: DUR.base, ease: EASE_OUT },
            }}
            style={{
              background: theme.colors.white,
              border: `1px solid ${theme.colors.bluePastel}`,
              borderRadius: theme.radii.xl,
              padding: '32px',
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
              <LayoutDashboard
                size={22}
                color={theme.colors.blue}
                aria-hidden="true"
              />
            </div>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: theme.colors.blueDark,
                marginTop: '18px',
                marginBottom: '8px',
              }}
            >
              Visão do dia ou do mês
            </h3>

            <p
              style={{
                fontSize: '14px',
                color: theme.colors.textSecondary,
                lineHeight: 1.65,
              }}
            >
              Veja o que tem no dia, quanto vai faturar e quais horários ainda
              estão livres — tudo organizado num painel leve, acessível de
              qualquer celular ou computador.
            </p>
          </motion.article>

          <motion.article
            variants={fadeIn}
            className="genda-bento-half"
            whileHover={{
              y: -4,
              boxShadow: theme.shadows.cardHover,
              transition: { duration: DUR.base, ease: EASE_OUT },
            }}
            style={{
              background: theme.colors.white,
              border: `1px solid ${theme.colors.bluePastel}`,
              borderRadius: theme.radii.xl,
              padding: '32px',
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
              <MessageCircle
                size={22}
                color={theme.colors.blue}
                aria-hidden="true"
              />
            </div>

            <h3
              style={{
                fontSize: '18px',
                fontWeight: 700,
                color: theme.colors.blueDark,
                marginTop: '18px',
                marginBottom: '8px',
              }}
            >
              Cliente sempre informado
            </h3>

            <p
              style={{
                fontSize: '14px',
                color: theme.colors.textSecondary,
                lineHeight: 1.65,
              }}
            >
              Depois de agendar, o cliente envia o comprovante direto no
              WhatsApp com um clique. Mais clareza para quem agenda, menos
              mensagens soltas para você responder.
            </p>
          </motion.article>
        </motion.div>

        <p
          style={{
            margin: '44px auto 0',
            textAlign: 'center',
            fontSize: 'clamp(16px, 2vw, 20px)',
            fontWeight: 600,
            color: theme.colors.textSecondary,
            maxWidth: '540px',
            lineHeight: 1.45,
          }}
        >
          Da divulgação do link ao atendimento — tudo no mesmo fluxo.
        </p>
      </div>
    </section>
  )
}
