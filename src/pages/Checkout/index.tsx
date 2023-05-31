import { useContext, useEffect, useState } from 'react'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  ShoppingCartSimple,
} from 'phosphor-react'
import { Button, Typography } from '../../components'
import { CardBody, CardContainer, SectionTitle } from './components/Card'
import {
  Box,
  CheckoutContainer,
  EmptyCartMessage,
  FormControl,
  InputComponent,
} from './styles'
import { ButtonRadio } from './components/ButtonCheckbox'
import { ButtonRadioGroup } from './components/ButtonCheckbox/styles'
import { ProductCart } from './components/ProductCart'
import { Amount } from './components/Amount'
import { CartContext } from '../../contexts/CartContext'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import cepPromise from 'cep-promise'
import { products } from '../../mock/data'
import { useNavigate } from 'react-router-dom'

const checkoutFormValidationSchema = zod.object({
  cep: zod.string().min(8, 'Informe o CEP.'),
  street: zod.string().min(20, 'Informe a rua.'),
  number: zod
    .string()
    .nonempty('Informe o número.')
    .refine(
      (value) => !isNaN(Number(value)),
      'O valor informado não é um número válido.',
    )
    .refine((value) => Number(value) >= 1, 'Informe o número.')
    .transform((value) => Number(value)),
  neighborhood: zod.string().min(6, 'Informe o bairro.'),
  complement: zod.string().optional(),
  city: zod.string().min(3, 'Informe o cidade.'),
  state: zod.string().min(2, 'Informe a UF.'),
  paymentOption: zod.string().refine((value) => {
    const acceptedValues = ['creditCard', 'debitCard', 'money']
    return acceptedValues.includes(value)
  }, 'Selecione uma opção de pagamento.'),
})

type CheckoutData = zod.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { cart, handleDecrement, handleIncrement,handleClearCart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      cart.some((item) => item.id === product.id),
    )
    const cartProducts = filteredProducts.map((product) => {
      return {
        ...product,
        quantity:
          cart.find((cartProduct) => cartProduct.id === product.id)?.quantity ||
          0,
      }
    })
    const totalCart = cartProducts.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0,
    )

    setTotal(totalCart)
  }, [cart])

 

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    trigger,
  } = useForm<CheckoutData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      neighborhood: '',
      number: undefined,
      paymentOption: '',
      state: '',
      street: '',
    },
  })

  const handleCheckout = (data: any) => {
    if (data && cart.length > 0) {
      console.log({ ...data, products: [...cart] })
      handleClearCart()
      localStorage.clear()
      navigate('/success')
    }
  }

  const cep = watch('cep')
  const handleSearchAddress = async (cepValue: string) => {
    if (cepValue.length === 8) {
      try {
        const res = await cepPromise(cepValue)
        setValue('street', res.street)
        setValue('neighborhood', res.neighborhood)
        setValue('city', res.city)
        setValue('state', res.state)
        trigger('street')
        trigger('neighborhood')
        trigger('city')
        trigger('state')
      } catch (error) {
        console.log(error)
      }
    }
  }

  const isSubmitDisabled = cep?.length !== 8

  if (cart.length === 0) {
    return (
      <CheckoutContainer>
        <EmptyCartMessage>
          <ShoppingCartSimple size={56} opacity={0.5} />
          <Typography as="h1" size="header-lg">
            Ops!
          </Typography>
          <Typography as="p" size="regular-lg">
            Você não possui nenhum produto em seu carrinho.
          </Typography>
          <Button variant="primary" onClick={() => navigate('/')}>
            Adicionar produtos
          </Button>
        </EmptyCartMessage>
      </CheckoutContainer>
    )
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCheckout)}>
        <CardContainer>
          <Typography as="h3" size="header-xs">
            Complete seu pedido
          </Typography>
          <CardBody>
            <SectionTitle>
              <MapPinLine size={24} color="#C47F17" />
              <div>
                <Typography as="h4" size="regular-md">
                  Endereço de Entrega
                </Typography>
                <Typography as="p" size="regular-sm">
                  Informe o endereço onde deseja receber seu pedido
                </Typography>
              </div>
            </SectionTitle>
            <Box gridColumns="200px">
              <FormControl>
                <InputComponent
                  placeholder="CEP"
                  {...register('cep', {
                    required: true,
                    onChange: (e) => handleSearchAddress(e.target.value),
                  })}
                />
                {errors.cep && <small>{errors?.cep?.message as string}</small>}
              </FormControl>
            </Box>
            <Box gridColumns="1fr">
              <FormControl>
                <InputComponent placeholder="Rua" {...register('street')} />
                {errors.street && (
                  <small>{errors?.street?.message as string}</small>
                )}
              </FormControl>
            </Box>
            <Box gridColumns="200px 3fr">
              <FormControl>
                <InputComponent
                  placeholder="Número"
                  {...register('number')}
                  type="number"
                />
                {errors.number && (
                  <small>{errors?.number?.message as string}</small>
                )}
              </FormControl>
              <FormControl>
                <InputComponent
                  placeholder="Complemento"
                  {...register('complement')}
                />
                <i>Opcional</i>
              </FormControl>
            </Box>
            <Box gridColumns="200px 2fr 1fr">
              <FormControl>
                <InputComponent
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
                {errors.neighborhood && (
                  <small>{errors?.neighborhood?.message as string}</small>
                )}
              </FormControl>
              <FormControl>
                <InputComponent placeholder="Cidade" {...register('city')} />
                {errors.city && (
                  <small>{errors?.city?.message as string}</small>
                )}
              </FormControl>
              <FormControl>
                <InputComponent placeholder="UF" {...register('state')} />
                {errors.state && (
                  <small>{errors.state.message as string}</small>
                )}
              </FormControl>
            </Box>
          </CardBody>
          <CardBody>
            <SectionTitle>
              <CurrencyDollar size={24} color="#4B2995" />
              <div>
                <Typography as="h4" size="regular-md">
                  Pagamento
                </Typography>
                <Typography as="p" size="regular-sm">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </Typography>
              </div>
            </SectionTitle>
            <ButtonRadioGroup>
              <ButtonRadio
                icon={<CreditCard size={24} />}
                label=" Cartão de crédito"
                value="creditCard"
                {...register('paymentOption')}
                defaultChecked
              />
              <ButtonRadio
                icon={<Bank size={24} />}
                label="Cartão de débito"
                value="debitCard"
                {...register('paymentOption')}
              />
              <ButtonRadio
                icon={<Money size={24} />}
                label="Dinheiro"
                value="money"
                {...register('paymentOption')}
              />
            </ButtonRadioGroup>
            {errors.paymentOption && (
              <small>{errors?.paymentOption?.message as string}</small>
            )}
          </CardBody>
        </CardContainer>
        <CardContainer>
          <Typography as="h3" size="header-xs">
            Cafés selecionados
          </Typography>
          <CardBody rounded>
            {cart.map((product) => {
              return (
                <ProductCart
                  id={product.id}
                  key={product.id}
                  img={product.img}
                  price={product.price}
                  quantity={product.quantity}
                  title={product.title}
                  handleIncrement={() => handleIncrement(product.id)}
                  handleDecrement={() => handleDecrement(product.id)}
                />
              )
            })}
            <Amount totalItems={total} shipping={3.5} totalAmount={total} />
            <Button
              type="submit"
              variant="secondary"
              disabled={isSubmitDisabled}
              full
            >
              Confirmar pedido
            </Button>
          </CardBody>
        </CardContainer>
      </form>
    </CheckoutContainer>
  )
}
