import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { ButtonRadioContainer, InputRadio } from './styles'

interface ButtonRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode
  label: string
}

export const ButtonRadio = forwardRef<HTMLInputElement, ButtonRadioProps>(
  (props, ref) => {
    return (
      <ButtonRadioContainer>
        <InputRadio type="radio" ref={ref} {...props} />
        <span>
          {props.icon} {props.label}
        </span>
      </ButtonRadioContainer>
    )
  },
)
