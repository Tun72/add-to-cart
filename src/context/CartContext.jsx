import { type } from "@testing-library/user-event/dist/type";
import { createContext, useContext, useReducer } from "react";

// reducer part
const initailState = {
  items: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "cart/add":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "cart/remove":
      return {
        ...state,
        items: state.item.filter((item) => item.id !== action.payload),
      };
    case "cart/increase":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * item.price,
              }
            : { ...item }
        ),
      };
    case "cart/decrease":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                  totalPrice: (item.quantity - 1) * item.price,
                }
              : { ...item }
          )
          .filter((item) => item.quantity !== 0),
      };
    default:
      return state;
  }
}

// context API
const CartContext = createContext();

export default function CartProvider({ children }) {
  const [{ items }, dispatch] = useReducer(reducer, initailState);

  function addItem(item) {
    dispatch({ type: "cart/add", payload: item });
  }

  function removeItem(id) {
    dispatch({ type: "cart/remove", payload: id });
  }

  function increaseItem(id) {
    dispatch({ type: "cart/increase", payload: id });
  }

  function decreaseItem(id) {

    dispatch({ type: "cart/decrease", payload: id });
  }

  const getTotalAmount = () =>
    items.reducer((prev, current) => prev + current.totalAmount, 0);

  const getCurrentQuantityById = (id) =>
    items.find((item) => item.id === id)?.quantity ?? 0;

  const itemsLength = items.length;

  return (
    <CartContext.Provider
      value={{
        items,
        itemsLength,
        getTotalAmount,
        dispatch,
        addItem,
        removeItem,
        increaseItem,
        decreaseItem,
        getCurrentQuantityById,
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
