import "./Modal.scss";
import { RxCross2 } from "react-icons/rx";

const Modal = (props) => {
  return (
    <div
      onClick={() => {
        props.onClose();
      }}
      className="ModalContainer"
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modalContent">
          <RxCross2
            className="cross"
            onClick={() => {
              props.onClose();
            }}
          />
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
