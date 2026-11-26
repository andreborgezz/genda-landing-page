import { theme } from '../styles/theme'

export function Footer() {
  return (
    <footer className="genda-footer">
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div className="genda-footer-top">
          <div>
            <a
              href="#"
              aria-label="Genda"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
              }}
            >
              <img
                src="/genda-logo-horizontal-dots.svg"
                alt="Genda"
                height={28}
                style={{
                  display: 'block',
                  width: 'auto',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.9,
                }}
              />
            </a>
            <p
              style={{
                color: theme.colors.textSecondary,
                fontSize: '14px',
                marginTop: '10px',
              }}
            >
              Agendamento sem fricção para profissionais de beleza.
            </p>
          </div>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(29,78,216,0.2)',
              color: theme.colors.blueLight,
              border: '1px solid rgba(29,78,216,0.3)',
              borderRadius: theme.radii.pill,
              padding: '6px 14px',
              fontSize: '13px',
              fontWeight: 500,
              whiteSpace: 'nowrap',
            }}
          >
            <span className="genda-pulse-dot" aria-hidden="true" />
            <span>Em beta · em breve para todos</span>
          </span>
        </div>

        <nav className="genda-footer-links" aria-label="Links do rodapé">
          <a className="genda-footer-link" href="#como-funciona">
            Como funciona
          </a>
          <a className="genda-footer-link" href="#funcionalidades">
            Funcionalidades
          </a>
          <a className="genda-footer-link" href="#precos">
            Preços
          </a>
          <a className="genda-footer-link" href="mailto:borges01andre@gmail.com">
            Contato
          </a>
        </nav>

        <div className="genda-footer-bottom">
          <span
            style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: '13px',
            }}
          >
            © {new Date().getFullYear()} Genda. Todos os direitos reservados.
          </span>
          <a
            className="genda-footer-credit-link"
            href="mailto:borges01andre@gmail.com"
          >
            borges01andre@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
