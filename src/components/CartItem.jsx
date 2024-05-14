import { useCart } from "../context/CartContext";
import Button from "./Button";
import UpdateCart from "./UpdateCart";

function CartItem({ item }) {
  const { name, id, totalPrice, quantity } = item;
  const { removeItem } = useCart();

  return (
    <li className="itemlist">
      <p>
        {quantity} &times; {name}
      </p>
      <div>
        <p className="itemprice">${totalPrice.toFixed(2)}</p>
        <UpdateCart itemQuantity={quantity} id={id} />
        <Button
          size="small"
          onClick={() => {
            removeItem(id);
          }}
        >
          remove
        </Button>
        
      </div>
    </li>
  );
}

export default CartItem;
