import { useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";

import ModalOverlay from "../modal-overlay/modal-overlay";

const Modal = (props) => {
  const { children, header, onClose } = props;
  const modalRoot = document.getElementById("react-modals");

  useEffect(() => {
    const keyDownEsc = (e) => e.key === "Escape" && props.onClose();
    document.addEventListener("keydown", keyDownEsc);
    return () => {
      document.removeEventListener("keydown", keyDownEsc);
    };
  }, [props]);

  return createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div className={styles.modal_content}>
        <div className={`${styles.modal_header}  pt-10 pl-10 pr-10`}>
          <h1 className="text text_type_main-large">{header}</h1>
          <div className={styles.btn_close}>
            <CloseIcon type="primary" onClick={onClose} />
          </div>
        </div>
        {children}
      </div>
    </>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  header: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};
