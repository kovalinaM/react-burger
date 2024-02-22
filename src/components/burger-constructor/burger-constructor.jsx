import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";

import {ingredientType} from '../../utils/types'

import styles from "./burger-constructor.module.css";

const BurgerConstructor = (props) => {
  const [modalIsActive, setModalActive] = useState(false);
  const handleIngredients = props.ingredients;
  const bun = handleIngredients[0];
  const fillings = handleIngredients.slice(1, handleIngredients.length);

  const orderSum = (bun, fillings) => {
    let sum = bun ? bun.price : 0;
    fillings &&
      fillings.map((item) => {
        return (sum += item.price);
      });
    return sum;
  };

  const handleOpenModal = () => {
    setModalActive(true);
  };

  const handleCloseModal = () => {
    setModalActive(false);
  };

  return (
    <section className={`${styles.constructor} mt-25 mb-10`}>
      <div className={styles.ingredients_container}>
        <div className="ml-8">
          <ConstructorElement
            text={`${bun.name} (Верх)`}
            isLocked={true}
            price={bun.price}
            thumbnail={bun.image_mobile}
            type="top"
          />
        </div>
        <div>
          <ul className={`${styles.list} custom-scroll`}>
            {fillings.flatMap((item) => {
              return Array.from({ length: item.__v }, (_, index) => (
                <li className={styles.item} key={`${item._id}-${index}`}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image_mobile}
                  />
                </li>
              ));
            })}
          </ul>
        </div>
        <div className="ml-8">
          <ConstructorElement
            text={`${bun.name}  (Низ)`}
            isLocked={true}
            price={bun.price}
            thumbnail={bun.image_mobile}
            type="bottom"
          />
        </div>
      </div>
      <div className={`${styles.total} mt-10`}>
        <div className={styles.value}>
          <span className="text text_type_main-large">
            {orderSum(bun, fillings)}
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
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};
