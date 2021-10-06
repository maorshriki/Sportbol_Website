import { useReducer } from "react";
import cartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM } from "../Types";

const CartState = ({ children }) => {
  const initalState = {
    showCart: false,
    cartItems: [],
    addedItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART });
  };

  const removeItem = (uniqueId) => {
    dispatch({ type: REMOVE_ITEM, payload: uniqueId });
  };

  return (
    <cartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addedItems: state.addedItems,
        addToCart,
        showHideCart,
        removeItem,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartState;
