import styled from 'styled-components'

export interface TypographyProps {
  size?:
    | 'header-xl'
    | 'header-lg'
    | 'header-sm'
    | 'header-xs'
    | 'regular-lg'
    | 'regular-md'
    | 'regular-sm'
    | undefined
}

export const TypographyBase = styled.span<TypographyProps>`
  font-family: 'Baloo 2', monospace;
  line-height: 1.3;
`

export const TypographyElement = styled(TypographyBase)`
  ${({ size, theme }) => {
    switch (size) {
      case 'header-xl':
        return `
          font-size: ${theme.typography.header.xl};
        `
      case 'header-lg':
        return `
          font-size: ${theme.typography.header.lg};
        `
      case 'header-sm':
        return `
          font-size: ${theme.typography.header.sm};
        `
      case 'header-xs':
        return `
          font-size: ${theme.typography.header.xs};
        `
      case 'regular-lg':
        return `
          font-size: ${theme.typography.regular.lg};
          font-family: "Roboto", monospace;
        `
      case 'regular-md':
        return `
          font-size: ${theme.typography.regular.md};
          font-family: "Roboto", monospace;
        `
      case 'regular-sm':
        return `
          font-size: ${theme.typography.regular.sm};
          font-family: "Roboto", monospace;
        `
      default:
        return `
          font-size: ${theme.typography.regular.md};
          font-family: "Roboto", monospace;
        `
    }
  }}
`
