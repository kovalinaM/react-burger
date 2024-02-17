import React from "react";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredient.module.css";
export default function BurgerIngredient(props) {
  const ingredient = props.ingredient;
  return (
    <article className={styles.card}>
      {(ingredient.__v > 0) && <Counter count={ingredient.__v} size="default" extraClass="m-1" /> } 
      <div className="mb-1">
        <img src={ingredient.image} alt={ingredient.name} />
      </div>
      <div className={styles.price} >
        <span className="text text_type_main-medium">{ingredient.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <div className={`${styles.name} text text_type_main-default mt-1 pb-3`}>{ingredient.name}</div>
    </article>
  );
}

BurgerIngredient.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  })
}
