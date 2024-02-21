import React from "react";
import styles from './order-details.module'
import imageDone from '../../images/done.svg'

const OrderDetails = () => {
    return (
        <div>
            <p className="text text_type_digits-large">034536</p>
            <p className={styles.identificator_size + " text text_type_main-medium"}>идентификатор заказа</p>
            <img src={imageDone} alt="Done"/>
            <div className={styles.bottom_text + " pt-7 text text_type_main-small"}>
                <p>Ваш заказ начали готовить</p>
                <p className="text_color_inactive">Дождитесь готовности на орбитальной станции</p>
            </div>
        </div>
    );
}


export default OrderDetails;