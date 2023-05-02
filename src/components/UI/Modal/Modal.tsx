import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import "./Modal.scss";

interface ModalProps {
  active: boolean;
  setActive: (state: boolean) => void;
  children: any;
}

const Modal: FC<ModalProps> = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? "modal modal--active" : "modal"}
      onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <IoMdClose className="modal__close" onClick={() => setActive(false)} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
