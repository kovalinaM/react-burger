import styles from "./order-details.module.css";
import {OrderDetailCard} from "../../components/order-detail-card/order-detail-card";

export function OrderDetailsPage() {
    return (
        <main className={`${styles.container} mt-30`}>
            <OrderDetailCard />
        </main>
    );
}