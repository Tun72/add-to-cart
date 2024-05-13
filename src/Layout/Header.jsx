import { HiShoppingCart } from "react-icons/hi";
import { useCart } from "../context/CartContext";

function Header({ handelCart }) {
  const { itemsLength } = useCart();

  return (
    <header>
      <h1>Sop-py Sop-py</h1>
      <button className="cart-btn"  onClick={handelCart}>
        Cart <HiShoppingCart className="cart-icon" />
        <span className="cart-item">{itemsLength}</span>
      </button>
    </header>
  );
}

export default Header;
