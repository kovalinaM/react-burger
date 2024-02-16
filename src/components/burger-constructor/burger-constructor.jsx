import React from "react";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";

export default function BurgerConstructor(props) {
  return (
    <section className={`${styles.constructor} mt-25`}>
      {/* <div>
        <div>
          <ConstructorElement
            text={bun.name + " (Верх)"}
            isLocked={true}
            price={bun.price}
            thumbnail={bun.image}
            type="top"
          />
        </div>
        <div className={style.list}>
          <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={img}
        />
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={img}
        />
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={img}
        />
        </div>
        <div className="ml-15">
          <ConstructorElement
            text={bun.name + " (Низ)"}
            isLocked={true}
            price={bun.price}
            thumbnail={bun.image}
            type="bottom"
          />
        </div>
      </div> */}
      <div className={`${styles.total} mt-10`}>
        <div className={styles.value}>
          <span></span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}
