import { useCart } from "../context/CartContext";
import { useOutsideClick } from "../hooks/useOutsideClick";
import CartItem from "./CartItem";
import Modal from "./Modal";

function Cart({ onClose }) {
  const ref = useOutsideClick(onClose);

  const { items, itemsLength } = useCart();

  return (
    <Modal>
      <div className="cart-data" ref={ref}>
        {itemsLength ? (
          <ul className="orderlist">
            {items.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
        ) : (
          <p>Your cart is empty. Start adding some items :)</p>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
