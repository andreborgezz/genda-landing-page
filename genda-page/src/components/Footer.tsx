import { theme } from '../styles/theme'

export function Footer() {
  return (
    <footer
      style={{
        background: theme.colors.blueDark,
        padding: '64px 24px 40px',
      }}
    >
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
                alignItems: 'baseline',
                fontSize: '20px',
                fontWeight: 800,
                color: theme.colors.white,
                letterSpacing: '-0.04em',
                lineHeight: 1,
              }}
            >
              <span>genda</span>
              <span
                aria-hidden="true"
                style={{
                  color: theme.colors.green,
                  fontSize: '22px',
                  lineHeight: 1,
                }}
              >
                ·
              </span>
            </a>
            <p
              style={{
                color: theme.colors.textSecondary,
                fontSize: '14px',
                marginTop: '8px',
              }}
            >
              Agendamento simples para quem trabalha com beleza.
            </p>
          </div>

          <span
            style={{
              display: 'inline-block',
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
            Em beta · em breve para todos
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
            © 2025 Genda. Todos os direitos reservados.
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
