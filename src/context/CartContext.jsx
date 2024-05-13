import { createContext, useContext, useReducer } from "react";

// reducer part
const initailState = {
  items: [],
  totalAmount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/add":
      return { ...state, items: [...state.items, action.payload] };
    case "cart/remove":
      let items = state.item.filter((item) => item.id !== action.payload);
      return { ...state, items };
    case "cart/increase":
      let item = state.item.find((item) => item.id === action.id);
      item.quantity++;
      item.total = item.quantity * item.price;
      return { ...state, items: state.item };
    case "cart/decrese":
      let item2 = state.item.find((item) => item.id === action.id);
      item2.quantity--;
      item2.total = item2.quantity * item2.price;
      return { ...state, items: state.item };
    default:
      return state;
  }
}

// context API
const CartContext = createContext();

export default function CartProvider({ children }) {
  const [{ items, totalAmount }, dispatch] = useReducer(reducer, initailState);

  function addItem(item) {
    console.log(item);
    dispatch({ type: "cart/add", payload: item });
  }

  function removeItem(id) {
    dispatch({ type: "cart/remove", payload: id });
  }

  return (
    <CartContext.Provider
      value={{
        items,
        totalAmount,
        dispatch,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error("CartContext are use outside of the CartProvider");
  return context;
}
