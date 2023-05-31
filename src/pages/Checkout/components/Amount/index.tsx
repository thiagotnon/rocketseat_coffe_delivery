import { Typography } from '../../../../components'
import { formatMoney } from '../../../../helpers'
import { AmountContainer } from './styles'
interface AmountProps {
  totalItems: number
  shipping: number
  totalAmount: number
}
export function Amount({ totalItems, shipping, totalAmount }: AmountProps) {
  return (
    <AmountContainer>
      <div>
        <Typography as="span" size="regular-sm">
          Total de itens
        </Typography>
        <Typography as="span" size="regular-md">
          R$ {formatMoney(totalItems)}
        </Typography>
      </div>
      <div>
        <Typography as="span" size="regular-sm">
          Entrega
        </Typography>
        <Typography as="span" size="regular-md">
          R$ {formatMoney(shipping)}
        </Typography>
      </div>
      <div>
        <Typography as="strong" size="regular-lg">
          Total
        </Typography>
        <Typography as="strong" size="regular-lg">
          R$ {formatMoney(totalAmount + shipping)}
        </Typography>
      </div>
    </AmountContainer>
  )
}
