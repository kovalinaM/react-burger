import React from "react";
import styles from './order-details.module.css'
import imageDone from '../../images/done.svg'
import { useSelector } from "react-redux";

const OrderDetails = () => {
    const {order, isLoading, error }= useSelector(store => store.order)
    return (
        <div className={styles.order_content}>
            {isLoading &&  <p className={styles.identificator_size + " text text_type_main-medium mb-15"}>Заказ отправляется...</p>}
            {error && <p className={styles.order_text + " pt-7 pb-30 text text_type_main-small"}>При отправке заказа произошла ошибка. Попробуйте еще раз</p>}
            {!isLoading && !error && order.order.number &&
                <>
                    <p className="text text_type_digits-large mb-8">{order.order.number}</p>
                    <p className={styles.identificator_size + " text text_type_main-medium mb-15"}>идентификатор заказа</p>
                    <img src={imageDone} alt="Done" width="120" height="120" className="mb-15"/>
                    <div className={styles.order_text + " pt-7 pb-30 text text_type_main-small"}>
                        <p>Ваш заказ начали готовить</p>
                        <p className="text_color_inactive">Дождитесь готовности на орбитальной станции</p>
                    </div>
                </>
            }
        </div>
    );
}

export default OrderDetails;