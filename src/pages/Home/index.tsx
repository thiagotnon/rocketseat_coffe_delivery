import { Banner } from './components/Banner'
import bannerImg from '../../assets/img/banner_home.png'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { Products } from './components/Products'
import { products } from '../../mock/data'

const topics = [
  {
    icon: <ShoppingCart size={16} weight="fill" />,
    label: 'Compra simples e segura',
    color: 'yellow-dark',
  },
  {
    icon: <Package size={16} weight="fill" />,
    label: 'Embalagem mantém o café intacto',
    color: 'base-text',
  },
  {
    icon: <Timer size={16} weight="fill" />,
    label: 'Entrega rápida e rastreada',
    color: 'yellow',
  },
  {
    icon: <Coffee size={16} weight="fill" />,
    label: 'O café chega fresquinho até você',
    color: 'purple',
  },
]

export function Home() {
  return (
    <>
      <Banner
        title="Encontre o café perfeito para qualquer hora do dia"
        subtitle="Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora"
        img={bannerImg}
        topics={topics}
      />
      <Products title="Nossos cafés" products={products} />
    </>
  )
}
