import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  HeaderContainer,
  HeaderContent,
  LocationBlock,
  NavBlock,
} from './styles'
import logoCaffeImg from '../../assets/img/logo_coffee_delivery.svg'
import { IconButton } from '../Button/styles'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Badge } from '../Badge'

export function Header() {
  const { cart, location } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/" title="Coffee Delivery">
          <img
            src={logoCaffeImg}
            alt="Ícone de um copo de café com o desenho de uma silhueta de um foguete com o texto Coffee Delivery"
          />
        </Link>
        <NavBlock>
          {location?.city && location?.state_code && (
            <LocationBlock>
              <MapPin size={24} weight="fill" />
              <span>{`${location.city}, ${location.state_code}`}</span>
            </LocationBlock>
          )}

          <IconButton variant="secondary" onClick={() => navigate('/checkout')}>
            <ShoppingCart size={24} weight="fill" />
            {cart.length > 0 && <Badge value={cart.length} />}
          </IconButton>
        </NavBlock>
      </HeaderContent>
    </HeaderContainer>
  )
}
