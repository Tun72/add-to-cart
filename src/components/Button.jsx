import { HiMinus, HiPlus } from "react-icons/hi";

function Button({ children, type, onClick, color = "", size = "" }) {
  const content = {
    add: (
      <>
        <HiPlus /> Add
      </>
    ),
    increase: <HiPlus />,
    decrease: <HiMinus />,
  };

  if (!type) {
    return (
      <button onClick={onClick} className={`btn ${color} ${size}`}>
        {children}
      </button>
    );
  }
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {content[type]}
    </button>
  );
}

export default Button;
