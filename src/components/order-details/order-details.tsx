import {FC} from "react";
import styles from './order-details.module.css'
import imageDone from '../../images/done.svg'
import { useSelector } from "../../services/types";
import Preloader from "../preloader/preloader";


const OrderDetails: FC = () => {
    const orderId = useSelector((store) => store.order.orderId);
    const isLoading = useSelector((store) => store.order.isLoading);
    const error = useSelector((store) => store.order.error);
    
    return (
        <div className={styles.order_content}>
            {isLoading &&  <Preloader header={"Заказ отправляется..."}/>}
            {error && <p className={styles.order_text + " pt-7 pb-30 text text_type_main-small"}>При отправке заказа произошла ошибка. Попробуйте еще раз</p>}
            {!isLoading && !error && orderId &&
                <>
                    <p className="text text_type_digits-large mb-8">{orderId}</p>
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