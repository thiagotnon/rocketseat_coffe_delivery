import { Trash } from 'phosphor-react'
import { Button, NumericInput, Typography } from '../../../../components'
import { ProductCartContainer, ProductCartContent } from './styles'
import { ProductProps } from '../../../../reducers/cart/reducer'
import { formatMoney } from '../../../../helpers'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'

interface ProductCartProps extends ProductProps {
  handleDecrement: () => void
  handleIncrement: () => void
}

export function ProductCart({
  id,
  img,
  title,
  price,
  quantity,
  handleDecrement,
  handleIncrement,
}: ProductCartProps) {
  const { handleRemoveProductFromCart } = useContext(CartContext)

  return (
    <ProductCartContainer>
      <img src={img} alt={title} />
      <ProductCartContent>
        <Typography as="p" size="regular-md">
          {title}
        </Typography>
        <div>
          <NumericInput
            id={id}
            quantity={quantity}
            min={1}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
          />
          <Button type="button" onClick={() => handleRemoveProductFromCart(id)}>
            <Trash /> Excluir
          </Button>
        </div>
      </ProductCartContent>
      <Typography as="strong" size="regular-md">
        {`R$ ${formatMoney(price * quantity)}`}
      </Typography>
    </ProductCartContainer>
  )
}
