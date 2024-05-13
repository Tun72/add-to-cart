import ReactDOM from "react-dom";
function Modal({ children, onClose }) {

  return ReactDOM.createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById("portal")
  );
}

export default Modal;
