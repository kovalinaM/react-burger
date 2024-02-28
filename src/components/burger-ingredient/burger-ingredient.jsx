import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";

import {ingredientType} from '../../utils/types'

import styles from "./burger-ingredient.module.css";
const BurgerIngredient = (props) => {
  const ingredient = props.ingredient;
  const [modalIsActive, setModalActive] = useState(false);

  const onClose = () => {
    setModalActive(false);
  };

  return (
    <>
      <article className={styles.card} onClick={() => setModalActive(true)}>
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
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </>
  );
}

BurgerIngredient.propTypes = {
  ingredient: ingredientType.isRequired,
};

export default React.memo(BurgerIngredient);
