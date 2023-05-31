import americano from '../assets/img/coffee_types/americano.png'
import arabe from '../assets/img/coffee_types/arabe.png'
import cafeComLeite from '../assets/img/coffee_types/cafeComLeite.png'
import cafeGelado from '../assets/img/coffee_types/cafeGelado.png'
import capuccino from '../assets/img/coffee_types/capuccino.png'
import chocolate from '../assets/img/coffee_types/chocolate.png'
import cubano from '../assets/img/coffee_types/cubano.png'
import cremoso from '../assets/img/coffee_types/cremoso.png'
import expresso from '../assets/img/coffee_types/expresso.png'
import havaiano from '../assets/img/coffee_types/havaiano.png'
import irlandes from '../assets/img/coffee_types/irlandes.png'
import latte from '../assets/img/coffee_types/latte.png'
import macchiato from '../assets/img/coffee_types/macchiato.png'
import mochaccino from '../assets/img/coffee_types/mochaccino.png'

export interface ProductProps {
  id: number
  img: string
  title: string
  description: string
  price: number
  tags: string[]
}

export const products: ProductProps[] = [
  {
    id: 1,
    title: 'Expresso Americano',
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: americano,
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    id: 2,
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    img: arabe,
    price: 9.9,
    tags: ['especial'],
  },
  {
    id: 3,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: cafeComLeite,
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 4,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    img: cafeGelado,
    price: 9.9,
    tags: ['tradicional', 'gelado'],
  },
  {
    id: 5,
    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    img: capuccino,
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 6,
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    img: chocolate,
    price: 9.9,
    tags: ['especial', 'com leite'],
  },
  {
    id: 7,
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    img: cubano,
    price: 9.9,
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: 8,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    img: cremoso,
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    id: 9,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: expresso,
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    id: 10,
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    img: havaiano,
    price: 9.9,
    tags: ['especial'],
  },
  {
    id: 11,
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: irlandes,
    price: 9.9,
    tags: ['tradicional', 'alcoólico'],
  },
  {
    id: 12,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    img: latte,
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 13,
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    img: macchiato,
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 14,
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    img: mochaccino,
    price: 9.9,
    tags: ['tradicional', 'com leite'],
  },
]
