import React from "react";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { ingredientType } from "../../utils/types";
import styles from "./burger-ingredient.module.css";
import {
  CLOSE_INGREDIENT_MODAL, UNSELECT_INGREDIENT,
} from "../../services/actions/ingredient-details";

const BurgerIngredient = ({ ingredient, onSelect }) => {
  const { modalIsActive } = useSelector((store) => store.ingredientDetails);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch({
      type: CLOSE_INGREDIENT_MODAL,
    });
    dispatch({
      type: UNSELECT_INGREDIENT,
    })
  };

  return (
    <>
      <li>
        <article className={styles.card} onClick = {() => onSelect(ingredient)}>
          {ingredient.count > 0 && (
            <Counter count={ingredient.count} size="default" extraClass="m-1" />
          )}
          <div className="mb-1">
            <img src={ingredient.image} alt={ingredient.name} />
          </div>
          <div className={styles.price}>
            <span className="text text_type_main-medium">
              {ingredient.price}
            </span>
            <CurrencyIcon type="primary" />
          </div>
          <div
            className={`${styles.name} text text_type_main-default mt-1 pb-3`}
          >
            {ingredient.name}
          </div>
        </article>
      </li>

      {modalIsActive && (
        <Modal header="Детали ингредиента" onClose={onClose}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </>
  );
};

BurgerIngredient.propTypes = {
  ingredient: ingredientType.isRequired,
  count: Number,
};

export default React.memo(BurgerIngredient);
