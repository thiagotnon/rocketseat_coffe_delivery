import { ReactNode, JSXElementConstructor } from 'react'
import { TypographyElement, TypographyProps } from './styles'

interface Props extends TypographyProps {
  children: ReactNode
  // eslint-disable-next-line no-undef
  as: keyof JSX.IntrinsicElements
}

export const Typography = ({ size, children, ...rest }: Props) => {
  return (
    <TypographyElement size={size} {...rest}>
      {children}
    </TypographyElement>
  )
}
