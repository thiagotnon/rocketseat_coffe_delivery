import { ShoppingCart } from 'phosphor-react'
import { NumericInput, Typography } from '../../../../components'
import { IconButton } from '../../../../components/Button/styles'
import { ProductsContainer, Tag, TagsList } from './styles'
import { useState } from 'react'
import { formatMoney } from '../../../../helpers'

interface CartProps {
  id: number
  img: string
  title: string
  price: number
  quantity: number
}

interface ProductProps {
  id: number
  img: string
  tags: string[]
  title: string
  description: string
  price: number
  addProductToCart: (product: CartProps) => void
}
export const Product = ({
  id,
  img,
  tags,
  title,
  description,
  price,
  addProductToCart,
}: ProductProps) => {
  const [quantity, setQuantity] = useState(1)
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleDecrement = () => {
    if (quantity >= 1) setQuantity((prev) => prev - 1)
  }

  return (
    <ProductsContainer>
      <img src={img} />
      <TagsList>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsList>
      <Typography as="h3" size="header-sm">
        {title}
      </Typography>
      <Typography as="p" size="regular-sm">
        {description}
      </Typography>
      <footer>
        <Typography as="p" size="regular-sm">
          R$ <span>{formatMoney(price)}</span>
        </Typography>
        <NumericInput
          id={id}
          min={1}
          max={Infinity}
          quantity={quantity}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
        <IconButton
          variant="primary"
          onClick={() => addProductToCart({ id, img, price, quantity, title })}
        >
          <ShoppingCart size={24} weight="fill" />
        </IconButton>
      </footer>
    </ProductsContainer>
  )
}
