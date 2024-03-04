import PropTypes from "prop-types";
import styles from "./constructor-info-element.module.css"

const ConstructorInfoElement = ({children}) => {
    
    return (
        <div className={`${styles.info} ml-8`}>
            <p className="text text_type_main-default text_color_inactive">{children}</p>
        </div>
    )
}

ConstructorInfoElement.propTypes = {
    children: PropTypes.string,
};

export default ConstructorInfoElement;