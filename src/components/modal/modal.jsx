import React, { useState } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";

const Modal = (props) => {
  const { children, header, onClose } = props;
  const modalRoot = document.getElementById("react-modals");

  return createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div className={styles.modal_content}>
        <div className={`${styles.modal_header}  mt-10 ml-10 mr-10`}>
          <h1 className="text text_type_main-medium">{header}</h1>
          <div className={styles.btn_close + ' pr-10'}>
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





