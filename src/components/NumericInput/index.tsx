import {
  NumericInputButton,
  NumericInputComponent,
  NumericInputContainer,
} from './styles'
import { Minus, Plus } from 'phosphor-react'

interface NumericInputProps {
  id: number
  min: number
  max?: number
  quantity: number
  handleIncrement: () => void
  handleDecrement: () => void
}
export function NumericInput({
  id,
  min,
  max,
  quantity,
  handleIncrement,
  handleDecrement,
}: NumericInputProps) {
  return (
    <NumericInputContainer>
      <NumericInputButton
        type="button"
        onClick={handleDecrement}
        disabled={quantity === 1}
      >
        <Minus />
      </NumericInputButton>

      <NumericInputComponent
        id={`${id}`}
        readOnly
        type="number"
        value={quantity}
        min={min}
        max={max}
      />
      <NumericInputButton type="button" onClick={handleIncrement}>
        <Plus />
      </NumericInputButton>
    </NumericInputContainer>
  )
}
