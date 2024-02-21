import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import styles from "./burger-ingredient.module.css";
export default function BurgerIngredient(props) {
  const ingredient = props.ingredient;
  const [modalIsActive, setModalActive] = useState(false);

  const onClose = () => {
    setModalActive(false);
};

  return (
    <>
      <article className={styles.card} onClick={()=>setModalActive(true)}>
        {ingredient.__v > 0 && (
          <Counter count={ingredient.__v} size="default" extraClass="m-1" />
        )}
        <div className="mb-1">
          <img src={ingredient.image} alt={ingredient.name} />
        </div>
        <div className={styles.price}>
          <span className="text text_type_main-medium">{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <div className={`${styles.name} text text_type_main-default mt-1 pb-3`}>
          {ingredient.name}
        </div>
      </article>
      {modalIsActive && (
        <Modal header="Детали ингредиента" onClose={onClose}>
          <IngredientDetails {...ingredient}/>
        </Modal>
      )}
    </>
  );
}

BurgerIngredient.propTypes = {
  ingredient: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["bun", "main", "sauce"]).isRequired,
    proteins: PropTypes.number,
    fat: PropTypes.number,
    carbohydrates: PropTypes.number,
    calories: PropTypes.number,
    price: PropTypes.number,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    image_large: PropTypes.string,
    __v: PropTypes.number,
  }),
};
