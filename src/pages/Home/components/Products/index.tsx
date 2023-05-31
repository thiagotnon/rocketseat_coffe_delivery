import { ProductsContainer, ProductsList } from './styles'
import { Typography } from '../../../../components/Typography'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { Product } from '../Product'

export interface ProductProps {
  id: number
  img: string
  title: string
  description: string
  price: number
  tags: string[]
}
interface ProductsProps {
  title: string
  products: ProductProps[]
}
export function Products({ title, products }: ProductsProps) {
  const { addProductToCart } = useContext(CartContext)

  return (
    <ProductsContainer>
      <Typography as="h3" size="header-lg">
        {title}
      </Typography>
      <ProductsList>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            img={product.img}
            title={product.title}
            description={product.description}
            price={product.price}
            tags={product.tags}
            addProductToCart={addProductToCart}
          />
        ))}
      </ProductsList>
    </ProductsContainer>
  )
}
