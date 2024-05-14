import ReactDOM from "react-dom";
import { ImCross } from "react-icons/im";
function Modal({ children, onClose, onRef }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <div className="cart-data" ref={onRef}>
        <h2 className="cart-heading">Your Cart</h2>
        <button className="close-cart" onClick={onClose}>
          <ImCross />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
