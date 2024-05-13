

function Card({ children, id = null }) {
  return (
    <div className="card">
      {!!id && <span>{id}</span>}
      {children}
    </div>
  );
}

export default Card;
