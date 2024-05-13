import { HiShoppingCart } from "react-icons/hi";

function Header() {
  return (
    <header>
      <h1>Sop-py</h1>
      <button className="cart-btn">
        Cart <HiShoppingCart className="cart-icon" /> <span className="cart-item">0</span>
      </button>
    </header>
  );
}

export default Header;
