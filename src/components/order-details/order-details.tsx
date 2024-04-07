import {FC} from "react";
import styles from './order-details.module.css'
import imageDone from '../../images/done.svg'
import { useSelector } from "react-redux";
import Preloader from "../preloader/preloader";

const getOrder = (store:any) => store.order.order;
const getIsLoading = (store:any) => store.order.isLoading;
const getError = (store:any) => store.order.error;

const OrderDetails: FC = () => {
    const order = useSelector(getOrder);
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    return (
        <div className={styles.order_content}>
            {isLoading &&  <Preloader/>}
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