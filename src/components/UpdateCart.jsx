import { useCart } from "../context/CartContext";
import Button from "./Button";

function UpdateCart({ itemQuantity, id }) {
  const { increaseItem, decreaseItem, } = useCart();

  return (
    <div className="increase-decrease">
      <Button type={"decrease"} onClick={() => decreaseItem(id)} />
      <p>{itemQuantity}</p>
      <Button type={"increase"} onClick={() => increaseItem(id)} />
    </div>
  );
}

export default UpdateCart;
