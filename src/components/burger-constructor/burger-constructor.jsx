import React, { useMemo } from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector, useDispatch } from "react-redux";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

import { ingredientType } from "../../utils/types";

import styles from "./burger-constructor.module.css";
import { DELETE_INGREDIENT } from "../../services/actions/burger-constructor";
import { DECREASE_INGREDIENT } from "../../services/actions/ingredients";
import { OPEN_ORDER_MODAL, CLOSE_ORDER_MODAL } from "../../services/actions/order";

const BurgerConstructor = ({onDelete}) => {
  const {modalIsActive} = useSelector((store) => store.order)
  const {bun, ingredients} = useSelector((store) => store.burderConstructor);
  const dispatch = useDispatch();

  function handleCloseModal() {
    dispatch({
      type: CLOSE_ORDER_MODAL
     })
  };

  function handleOpenModal() {
     dispatch({
      type: OPEN_ORDER_MODAL
     })
  };
  function onDeleteIngredient(uniqId, _id) {
    dispatch({
      type: DELETE_INGREDIENT,
      uniqId: uniqId
    })
    dispatch({
      type: DECREASE_INGREDIENT,
      _id: _id
    })
  }

  const totalPrice = useMemo(()=> {
    return ingredients.reduce((sum, ingredient) => {
      if (ingredient.price) {
        return sum + ingredient.price
      }
      return sum;
    }, 0) + (bun ? 2 * bun.price : 0);
  }, [bun, ingredients])


  return (
    <section className={`${styles.constructor} mt-25 mb-10`}>
      <div className={styles.ingredients_container}>
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
              ingredients.map((ingredient) => (
                <li className={styles.item} key={`${ingredient.uniqId}`}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image_mobile}
                    handleClose={() => onDeleteIngredient(ingredient.uniqId, ingredient._id)}
                  />
                </li>
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
          onClick={handleOpenModal}
          htmlType="button"
          type="primary"
          size="large"
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
