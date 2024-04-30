import  {FC, useEffect} from "react";
import { useParams } from "react-router-dom";
import styles from "./order-detail-card.module.css";
import {useSelector, useDispatch} from "../../services/types";
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import Preloader from "../preloader/preloader";
import {selectOrderAction} from "../../services/actions/feed";
import {TCorrectOrder} from "../../types";
import {formatDate} from "../../utils/helpers";
import IngredientPreviewIcon from "../ingredients-preview-icon/ingredients-preview-icon";

type TOrderInfo = {
    modal?: boolean;
}

export const OrderDetailCard: FC<TOrderInfo> = ({ modal = false }) => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ws);
    const { orders } = useSelector((state => state.feed));
    const { selectedOrder } = useSelector((state) => state.feed);
    const { id } = useParams<{ id?: string }>();

   useEffect(() => {
        if (!selectedOrder && id && orders) {
            const order = orders.find((order: TCorrectOrder) => order._id === id);
            order && dispatch(selectOrderAction(order));
        }
    }, [selectedOrder, id, orders, dispatch]);

    if (loading) {
        return (<Preloader header={"Загружается описание ..."}/>);
    }
    if (!selectedOrder) {
        return (<p>Описание заказа не найдено</p>);
    }

    const { number, name, status, ingredients, createdAt } = selectedOrder;
    const date = createdAt && formatDate(createdAt);
    const cost = ingredients && ingredients.reduce((acc, cur) => acc + cur.count * cur.price, 0);

    const done = status === 'done';

    return (
        <section className={`${styles.container} mt-10 mb-10 mr-10 ml-10`}>
            <p className={`text text_type_digits-default ${!modal && styles.number}`}>{`#${number}`}</p>
            <p className={"text text_type_main-medium mt-10"}>{name}</p>
            <p className={`text text_type_main-default mt-3 ${done && styles.status}`}>{done ? 'Выполнен' : 'Готовится'}</p>
            <p className={"text text_type_main-medium mt-15 mb-6"}>Состав:</p>
            <ul className={`${styles.list} custom-scroll`}>
                {
                    ingredients.map((ingredient, index) => (
                        <li className={`${styles.card} mb-4`} key={ingredient._id}>
                            <IngredientPreviewIcon ingredient={ingredient} index={index}/>
                            <p className={`${styles.title} text text_type_main-default ml-4 mr-15`}>{ingredient.name}</p>
                            <div className={`${styles.cost} mr-6`}>
                                <p className={"text text_type_digits-default mr-2"}>{`${ingredient.count} x ${ingredient.price}`}</p>
                                <CurrencyIcon type="primary"/>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className={`${styles.footer} mt-10`}>
                <p className={"text text_type_main-default text_color_inactive"}>{date}</p>
                <div className={styles.total}>
                    <p className={"text text_type_digits-default mr-2"}>{cost}</p>
                    <CurrencyIcon type="primary"/>
                </div>
            </div>
        </section>
    );
};