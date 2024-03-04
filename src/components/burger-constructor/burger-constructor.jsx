import React, { useMemo, useRef } from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";
import { useDrop, useDrag } from "react-dnd";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import ConstructorIngredient from "../ingredient-constructor/constructor-ingredient"

import { ingredientType } from "../../utils/types";

import styles from "./burger-constructor.module.css";
import { OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL, createOrder } from "../../services/actions/order";
import { INGREDIENTS_TYPES } from "../../utils/constants";
import { v4 as uuidv4 } from 'uuid';
import { SET_BUNS, ADD_INGREDIENT, MOVE_INGREDIENT} from "../../services/actions/burger-constructor";
import { INCREASE_INGREDIENT, CHANGE_BUNS } from "../../services/actions/ingredients";


const BurgerConstructor = () => {
  const {modalIsActive} = useSelector((store) => store.order)
  const {bun, ingredients} = useSelector((store) => store.burderConstructor);
  const dispatch = useDispatch();


//перетаскивание в конструктор
  const [, dropRef] = useDrop({
    accept: "ingredients",
    drop(ingredient) {
      onDropHandler(ingredient)
    }
  });

  function onDropHandler(ingredient) {
    const {_id, type} = ingredient;
    switch(type) {
      case INGREDIENTS_TYPES.BUN.type: {
        dispatch({
          type: CHANGE_BUNS,
          _id: _id,
        });
        dispatch({
          type: SET_BUNS,
          bun: ingredient,
        });
        break;
      }
      default: {
        dispatch({
          type: INCREASE_INGREDIENT,
          _id: _id,
        });
        dispatch({
          type: ADD_INGREDIENT,
          ingredient: { ...ingredient, uniqId: uuidv4() },
        });
        break;
      }
    }
  }

  function handleCloseModal() {
    dispatch({
      type: CLOSE_ORDER_MODAL
    })
  };

  function createOrderHandler() {
    const order = {
      ingredients: [bun._id, ...ingredients.map((ingredient) => ingredient._id), bun._id]
    }
      dispatch({
        type: OPEN_ORDER_MODAL
      })
      dispatch(createOrder(order))
  };

  const totalPrice = useMemo(()=> {
    return ingredients.reduce((sum, ingredient) => {
      if (ingredient.price) {
        return sum + ingredient.price
      }
      return sum;
    }, 0) + (bun ? 2 * bun.price : 0);
  }, [bun, ingredients])


  return (
    <section className={`${styles.constructor} mt-25 mb-10`} >
      <div className={styles.ingredients_container} ref={dropRef}>
        {bun ? (
          <div className="ml-8">
            <ConstructorElement
              text={`${bun.name} (Верх)`}
              isLocked={true}
              price={bun.price}
              thumbnail={bun.image_mobile}
              type="top"
            />
          </div>
        ) : 'Выберите булку'}

        <div>
          <ul className={`${styles.list} custom-scroll`}>
            {ingredients.length > 0 ? (
              ingredients.map((ingredient, index) => (
                <ConstructorIngredient ingredient={ingredient} index={index} key={ingredient.uniqId}  />
              )) 
            ) : 'Выберите ингредиенты для начинки'}
          </ul>
        </div>
        {bun && (
          <div className="ml-8">
            <ConstructorElement
              text={`${bun.name}  (Низ)`}
              isLocked={true}
              price={bun.price}
              thumbnail={bun.image_mobile}
              type="bottom"
            />
          </div>
          )
        }

      </div>
      <div className={`${styles.total} mt-10`}>
        <div className={styles.value}>
          <span className="text text_type_main-large">
            {totalPrice}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          onClick={createOrderHandler}
          htmlType="button"
          type="primary"
          size="large"
          disabled={!bun}
        >
          Оформить заказ
        </Button>
        {modalIsActive && (
          <Modal onClose={handleCloseModal}>
            <OrderDetails />
          </Modal>
        )}
      </div>
    </section>
  );
};

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
};
