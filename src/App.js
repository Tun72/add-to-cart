import Main from "./Layout/Main";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Main />
    </CartProvider>
  );
}

export default App;
