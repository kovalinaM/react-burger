import React from "react";
import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { ingredientType } from "../../utils/types";
import styles from "./burger-ingredient.module.css";
import {
  OPEN_INGREDIENT_MODAL,
  CLOSE_INGREDIENT_MODAL,
} from "../../services/actions/ingredient-details";

const BurgerIngredient = ({ ingredient, count }) => {
  const { modalIsActive } = useSelector((store) => store.ingredientDetails);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch({
      type: CLOSE_INGREDIENT_MODAL,
    });
  };

  const onOpenModal = () => {
    dispatch({
      type: OPEN_INGREDIENT_MODAL,
    });
  };

  return (
    <>
      <li>
        <article className={styles.card} onClick={onOpenModal}>
          {count > 0 && (
            <Counter count={count} size="default" extraClass="m-1" />
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
