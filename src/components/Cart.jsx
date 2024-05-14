import { ImCross } from "react-icons/im";
import { useCart } from "../context/CartContext";
import { useOutsideClick } from "../hooks/useOutsideClick";
import CartItem from "./CartItem";
import Modal from "./Modal";
import Button from "./Button";

function Cart({ onClose }) {
  const ref = useOutsideClick(onClose);

  const { items, itemsLength, clearCart, getTotalAmount } = useCart();
  const totalAmount = getTotalAmount();

  function handelOrder() {
    alert("successfully ordered!✅");
  }

  function handelCLearCart() {
    const isClear = window.confirm("Are u sure ?");
    if (isClear) clearCart();
  }

  return (
    <Modal onClose={onClose} onRef={ref}>

      <div className="cart-header">
        <h2 className="cart-heading">Your Cart</h2>
        {!!itemsLength && <p>Total💰- ${totalAmount.toFixed(2)}</p>}
      </div>

      {itemsLength ? (
        <>
          <ul className="orderlist">
            {items.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
          <div className="orde-cart">
            <Button size="normal" onClick={handelOrder}>
              Order Now
            </Button>
            <Button size="normal" color="white" onClick={handelCLearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      ) : (
        <p>Your cart is empty. Start adding some items :)</p>
      )}
    </Modal>
  );
}

export default Cart;
