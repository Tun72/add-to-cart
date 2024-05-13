import { HiMinus, HiPlus } from "react-icons/hi";

function Button({ type, onClick }) {
  const content = {
    add: (
      <>
        <HiPlus /> Add
      </>
    ),
    increase: <HiPlus />,
    decrease: <HiMinus />,
  };
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {content[type]}
    </button>
  );
}

export default Button;
