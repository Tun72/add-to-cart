import UpdateCart from "./UpdateCart";

function CartItem({ item }) {
  const { name, id, totalPrice, quantity } = item;

  return (
    <li className="itemlist">
      <p>
        {quantity} &times; {name}
      </p>
      <div>
        <p className="itemprice">${totalPrice}</p>
        <UpdateCart itemQuantity={quantity} id={id}  />
      </div>
    </li>
  );
}

export default CartItem;
