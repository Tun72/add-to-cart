import AddtoCart from "./AddtoCart";
import Card from "./Card";

function FruitCard({ fruit: { id, name, description, price } }) {
  return (
    <Card id={id}>
      <div className="card-item">
        <p>{name}</p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
      <AddtoCart name={name} price={price} id={id} />
    </Card>
  );
}

export default FruitCard;
