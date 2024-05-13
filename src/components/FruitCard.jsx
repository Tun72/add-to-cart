import { useState } from "react";
import Card from "./Card";
import { useCart } from "../context/CartContext";
import UpdateCart from "./UpdateCart";
import Button from "./Button";

function FruitCard({ fruit: { id, name, description, price } }) {
  const [quantity, setQuantity] = useState(1);
  const { addItem, getCurrentQuantityById } = useCart();
  const itemQuantity = getCurrentQuantityById(id);
  function handelSubmit(e) {
    e.preventDefault();
    const item = {
      name,
      id,
      price,
      quantity,
      totalPrice: price * quantity,
    };
    addItem(item);
  }

  return (
    <Card id={id}>
      <div className="card-item">
        <p>{name}</p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
      {itemQuantity ? (
        <UpdateCart itemQuantity={itemQuantity}  id={id} />
      ) : (
        <form className="add-to-cart" onSubmit={handelSubmit}>
          <input
            type="number"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <Button type={"add"} />
        </form>
      )}
    </Card>
  );
}

export default FruitCard;
