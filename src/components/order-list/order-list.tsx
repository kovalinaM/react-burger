import {FC} from 'react';
import styles from './order-list.module.css';
import {TCorrectOrder} from "../../types";
import OrderCard from "../order-card/order-card";

type TOrderList = {
    orders: TCorrectOrder[];
}

const OrderList: FC<TOrderList> = ({orders}) => {
    return (
        <ul className={styles.list}>
            {
                orders.map((order) => <OrderCard order={order} key={order._id}/>)
            }
        </ul>
    )
}

export default OrderList;