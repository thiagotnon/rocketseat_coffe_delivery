import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Location, useUserLocation } from "../hooks/useUserLocation";
import { ProductProps, cartReducer } from "../reducers/cart/reducer";
import {
  addNewProductAction,
  clearCartAction,
  decrementAction,
  incrementAction,
  removeProductAction,
} from "../reducers/cart/actions";

interface CartContextProps {
  cart: ProductProps[];
  location: Location | null;
  addProductToCart: (product: ProductProps) => void;
  handleRemoveProductFromCart: (id: number) => void;
  handleIncrement: (id: number) => void;
  handleDecrement: (id: number) => void;
  handleClearCart: () => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
    cart: [],
  },(initialState) => {
    const storedStateAsJSON = localStorage.getItem(
      '@ignite-timer:cart-state-1.0.0',
    )
    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
    return initialState
  });

  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const { location } = useUserLocation(latitude ?? 0, longitude ?? 0);

  

  const { cart } = cartState;

  const addProductToCart = (product: ProductProps) => {
    dispatch(addNewProductAction(product));
  };

  const handleRemoveProductFromCart = (id: number) => {
    dispatch(removeProductAction(id));
  };

 

  const handleIncrement = (id: number) => {
    dispatch(incrementAction(id))
  }
  const handleDecrement = (id: number) => {
    dispatch(decrementAction(id))
  } 
  const handleClearCart = () => {
    dispatch(clearCartAction())
  } 

  
  useEffect(() => {
    const stateJSON = JSON.stringify(cartState);
    localStorage.setItem("@ignite-timer:cart-state-1.0.0", stateJSON);
  }, [cartState]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        
      }
    );
  }, [location]);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        handleRemoveProductFromCart,
        location,
        handleIncrement,
        handleDecrement,
        handleClearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
