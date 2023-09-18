import { createPortal } from "react-dom";

const modalRoot=document.querySelector("#modal-root");
const Modal = ({ children, closeModal, handleBackdropClick }) => {

  return createPortal(
    <div
      className="modal fade show"
      style={{ display: 'block', backdropFilter: 'blur(5px)' }}
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New Contact</h5>
            <button
              type="button"
              className="btn-close"
              area-label="close"
              onClick={closeModal}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  , modalRoot);
 
};

export default Modal;
