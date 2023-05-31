import { ProductProps } from './reducer'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  UPDATE_AMOUNT = 'UPDATE_AMOUNT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  INCREMENT_PRODUCT = 'INCREMENT_PRODUCT',
  DECREMENT_PRODUCT = 'DECREMENT_PRODUCT',
  CLEAR_CART = 'CLEAR_CART',
}

export const addNewProductAction = (newProduct: ProductProps) => {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  } 
}
export const updateAmountAction = () => {
  return {
    type: ActionTypes.UPDATE_AMOUNT,
  }
}
export const removeProductAction = (id: number) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      id
    }
  }
}

export const incrementAction = (id: number) => {
  return {
    type: ActionTypes.INCREMENT_PRODUCT,
    payload: {
      id
    }
  }
}
export const decrementAction = (id: number) => {
  return {
    type: ActionTypes.DECREMENT_PRODUCT,
    payload: {
      id
    }
  }
}
export const clearCartAction = () => {
  return {
    type: ActionTypes.CLEAR_CART
  }
}
