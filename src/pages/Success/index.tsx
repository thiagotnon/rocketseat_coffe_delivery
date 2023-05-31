import { Typography } from '../../components'
import imgShipping from '../../assets/img/banner_delivery.svg'
import { SuccessBoxInfo, SuccessContainer, SuccessContent } from './styles'
import { Icon } from '../Home/components/Banner/styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'


export function Success() {


  return (
    <SuccessContainer>
      <SuccessContent>
        <Typography as="h1" size="header-lg">
          Uhu! Pedido confirmado
        </Typography>
        <Typography as="p" size="regular-lg">
          Agora é só aguardar que logo o café chegará até você
        </Typography>
        <SuccessBoxInfo>
          <ul>
            <li>
              <Icon color="purple">
                <MapPin weight="fill" />
              </Icon>
              <Typography as="p" size="regular-lg">
                Entrega em Rua <span>João Daniel Martinelli, 102</span> Farrapos
                - Porto Alegre, RS
              </Typography>
            </li>
            <li>
              <Icon color="yellow">
                <Timer weight="fill" />
              </Icon>
              <Typography as="p" size="regular-lg">
                Previsão de entrega
                <br />
                <span>20 min - 30 min</span>
              </Typography>
            </li>
            <li>
              <Icon color="yellow-dark">
                <CurrencyDollar weight="fill" />
              </Icon>
              <Typography as="p" size="regular-lg">
                Pagamento na entrega
                <br />
                <span>Cartão de Crédito</span>
              </Typography>
            </li>
          </ul>
        </SuccessBoxInfo>
      </SuccessContent>
      <div>
        <img src={imgShipping} alt="" />
      </div>
    </SuccessContainer>
  )
}
