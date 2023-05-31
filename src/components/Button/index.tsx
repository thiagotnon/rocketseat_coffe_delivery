import { ButtonContainer, ButtonProps } from './styles'

export const Button = ({ variant, full, children, ...props }: ButtonProps) => {
  return (
    <ButtonContainer variant={variant} {...props} full={full}>
      {children}
    </ButtonContainer>
  )
}
