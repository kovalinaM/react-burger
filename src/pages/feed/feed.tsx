import styles from "./feed.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../services/types";
import { wsConnectionStartAction, wsConnectionClosedAction } from "../../services/actions/wsActions";
import { WS_ALL_ORDERS_URL } from "../../utils/constants";
import Preloader from '../../components/preloader/preloader';

export function FeedPage() {
    const dispatch = useDispatch();
    const loading = useSelector(store => store.ws.loading);

    useEffect(() => {
        dispatch(wsConnectionStartAction(WS_ALL_ORDERS_URL));
        return () => {
          dispatch(wsConnectionClosedAction());
        }
      }, [dispatch]);

    const orders = useSelector((store) => store.ws.orders);

    if (loading) {
      return (<Preloader />);
    }
    return (
        <main className={styles.main}>
            <h1 className={"text text_type_main-large mb-5 mt-10"}>Лента заказов</h1>
        </main>
    )
}