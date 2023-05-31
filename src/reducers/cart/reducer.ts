import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface ProductProps {
  id: number
  title?: string
  description?: string
  img?: string
  quantity: number
  price: number
  tags?: string[]
}

interface CartState {
  cart: ProductProps[]
}

export const cartReducer = (state: CartState, action: any) => {
  switch (action.type) {
    case ActionTypes.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(product => product.id !== action.payload.id)
      })
     

    case ActionTypes.ADD_NEW_PRODUCT:
      return produce(state, (draft) => {
        const existingProduct = draft.cart.find((item) => item.id === action.payload.newProduct.id);

        if(existingProduct) {
          draft.cart = draft.cart.map(product => {
            if(product.id === existingProduct.id) {
              return {
                ...product,
                quantity: product.quantity + action.payload.newProduct.quantity
              }
            }
            return product
          })
        } else {
          draft.cart.push(action.payload.newProduct)
        }
      })


    case ActionTypes.INCREMENT_PRODUCT: 
      return produce(state, (draft) => {
        const product = draft.cart.find((product) => product.id === action.payload.id);
        if (product) {
          product.quantity += 1;
        }
      });
      

    case ActionTypes.DECREMENT_PRODUCT: 
      return produce(state, (draft) => {
        const product = draft.cart.find((product) => product.id === action.payload.id);
        if (product) {
          product.quantity = product.quantity > 1 ? product.quantity - 1 : 1;
        }
      });
    
    case ActionTypes.CLEAR_CART:
      return produce(state, (draft) => {
        draft.cart = [];
      });
      
      
    default:
      return state
  }
}
