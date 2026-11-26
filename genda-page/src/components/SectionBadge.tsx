import type { ReactNode } from 'react'
import { theme } from '../styles/theme'

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        display: 'inline-block',
        background: theme.colors.bluePastel,
        color: theme.colors.blue,
        borderRadius: theme.radii.pill,
        padding: '4px 14px',
        fontSize: '13px',
        fontWeight: 600,
        marginBottom: '16px',
        letterSpacing: '0.02em',
      }}
    >
      {children}
    </span>
  )
}
