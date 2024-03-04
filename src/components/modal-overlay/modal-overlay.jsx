import PropTypes from "prop-types";

import styles from "./modal-overlay.module.css";

const ModalOverlay = (props) => {
  return <div className={styles.modal_overlay} onClick={props.onClick} />;
};

export default ModalOverlay;

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};
