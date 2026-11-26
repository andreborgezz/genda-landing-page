import { useEffect, useState, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import { SectionBadge } from '../components/SectionBadge'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { EASE_OUT } from '../lib/motion'
import { theme } from '../styles/theme'

interface Testimonial {
  quote: string
  name: string
  role: string
  initials: string
  bg: string
  isAccentBg?: boolean
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      '“Antes eu controlava tudo no papel. Hoje meus clientes agendam sozinhos e eu só apareço para atender.”',
    name: 'Mariana C.',
    role: 'Esteticista',
    initials: 'MC',
    bg: theme.colors.pageBg,
  },
  {
    quote:
      '“O link no Instagram mudou tudo. Nunca mais precisei ficar respondendo ‘que horas tem vaga?’”',
    name: 'Rafael S.',
    role: 'Barbeiro',
    initials: 'RS',
    bg: theme.colors.bluePastel,
    isAccentBg: true,
  },
  {
    quote: '“Simples de configurar, simples de usar. Exatamente o que eu precisava.”',
    name: 'Camila F.',
    role: 'Manicure',
    initials: 'CF',
    bg: theme.colors.white,
  },
]

const GROUP_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS]

function TestimonialCard({
  quote,
  name,
  role,
  initials,
  bg,
  isAccentBg,
  fullWidth,
}: Testimonial & { fullWidth?: boolean }) {
  const accentColor = isAccentBg ? theme.colors.blueLight : theme.colors.bluePastel
  const avatarBg = isAccentBg ? theme.colors.white : theme.colors.bluePastel

  return (
    <article
      style={{
        width: fullWidth ? '100%' : '320px',
        flexShrink: 0,
        background: bg,
        border: `1px solid ${theme.colors.bluePastel}`,
        borderRadius: theme.radii.xl,
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          fontSize: '48px',
          color: accentColor,
          fontWeight: 900,
          lineHeight: 1,
          marginBottom: '-8px',
        }}
      >
        “
      </span>

      <p
        style={{
          fontSize: '15px',
          color: theme.colors.blueDark,
          lineHeight: 1.65,
          fontStyle: 'italic',
          flex: 1,
        }}
      >
        {quote}
      </p>

      <div
        style={{
          height: '1px',
          background: accentColor,
          margin: '20px 0',
        }}
      />

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          aria-hidden="true"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: avatarBg,
            color: theme.colors.blue,
            fontSize: '13px',
            fontWeight: 700,
            display: 'grid',
            placeItems: 'center',
            flexShrink: 0,
          }}
        >
          {initials}
        </div>
        <div>
          <div
            style={{
              fontSize: '15px',
              fontWeight: 700,
              color: theme.colors.blueDark,
              lineHeight: 1.25,
            }}
          >
            {name}
          </div>
          <div
            style={{
              fontSize: '13px',
              color: theme.colors.textSecondary,
              lineHeight: 1.35,
            }}
          >
            {role}
          </div>
        </div>
      </div>
    </article>
  )
}

export function Testimonials() {
  const { ref, inView } = useScrollReveal()
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <section
      style={{
        background: theme.colors.white,
        padding: '96px 0',
      }}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
        style={{
          padding: '0 24px',
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <SectionBadge>Depoimentos</SectionBadge>
        <h2
          style={{
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            fontWeight: 800,
            color: theme.colors.blueDark,
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            textAlign: 'center',
          }}
        >
          Quem usa, não volta para a agenda manual.
        </h2>
      </motion.div>

      {reducedMotion ? (
        <div className="genda-testimonials-static">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} fullWidth />
          ))}
        </div>
      ) : (
        <div
          className="genda-marquee-mask"
          style={{
            marginTop: '56px',
            display: 'grid',
            gap: '20px',
          }}
        >
          <div
            className="genda-marquee-track"
            style={{ '--marquee-dur': '30s' } as CSSProperties}
          >
            <div className="genda-marquee-group">
              {GROUP_ITEMS.map((t, i) => (
                <TestimonialCard key={`row1-a-${i}`} {...t} />
              ))}
            </div>
            <div className="genda-marquee-group" aria-hidden="true">
              {GROUP_ITEMS.map((t, i) => (
                <TestimonialCard key={`row1-b-${i}`} {...t} />
              ))}
            </div>
          </div>

          <div
            className="genda-marquee-track genda-marquee-track--reverse"
            style={{ '--marquee-dur': '36s' } as CSSProperties}
          >
            <div className="genda-marquee-group">
              {[...GROUP_ITEMS].reverse().map((t, i) => (
                <TestimonialCard key={`row2-a-${i}`} {...t} />
              ))}
            </div>
            <div className="genda-marquee-group" aria-hidden="true">
              {[...GROUP_ITEMS].reverse().map((t, i) => (
                <TestimonialCard key={`row2-b-${i}`} {...t} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
