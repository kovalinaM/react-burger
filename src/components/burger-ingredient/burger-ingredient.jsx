import React from "react";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredient.module.css";

export default function BurgerIngredient(props) {
  return (
    <article className={styles.card}>
      {(props._v > 0) ? <Counter count={props._v} size="default" extraClass="m-1" /> : null}
    
      <div className="mb-1">
        <img src={props.image} alt={props.name} />
      </div>
      <div className={styles.price} >
        <span className="text text_type_main-medium">{props.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className="text text_type_main-default mt-1 pb-3">{props.name}</div>
    </article>
  );
}
