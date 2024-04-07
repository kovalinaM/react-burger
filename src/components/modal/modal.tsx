import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";

import ModalOverlay from "../modal-overlay/modal-overlay";

type TModal = {
  children: ReactNode;
  header?: string;
  onClose: () => void;
}
const Modal: FC<TModal> = ({ children, header, onClose } ) => {
  const modalRoot = document.getElementById("react-modals") as Element;

  useEffect(() => {
    const keyDownEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", keyDownEsc);
    return () => {
      document.removeEventListener("keydown", keyDownEsc);
    };
  }, [onClose]);

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

