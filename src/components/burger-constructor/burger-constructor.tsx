import { FC, useMemo, useState } from "react";
import {
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from "../../services/types";
import { useDrop} from "react-dnd";
import { useNavigate } from "react-router-dom";

import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import ConstructorIngredient from "../ingredient-constructor/constructor-ingredient"
import ConstructorInfoElement from "../constructor-info-element/constructor-info-element";

import { INGREDIENTS_TYPES } from "../../utils/constants";
import { addIngredientAction, clearConstructorAction ,setBunsAction } from "../../services/actions/burger-constructor";
import { increaseIngredientAction, clearQuantityAction, changeBunsAction } from "../../services/actions/ingredients";
import { openOrderDetailsModal, closeOrderDetailsModal, createOrder } from "../../services/actions/order";

import {useIsAuthenticated} from "../../utils/selectors";
import {TIngredientConstructor} from "../../types";


const BurgerConstructor: FC = () => {
  const isAuthenticated =  useIsAuthenticated();
  const modalIsActive = useSelector((store) => store.order.modalIsActive);
  const bun = useSelector((store) => store.burgerConstructor.bun);
  const ingredients = useSelector((store) => store.burgerConstructor.ingredients);
  const orderError = useSelector((store) => store.order.error);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [{ canDrop }, dropRef] = useDrop({
    accept: "ingredients",
    drop(ingredient: TIngredientConstructor) {
      onDropHandler(ingredient)
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop()
    })
  });

  function onDropHandler(ingredient: TIngredientConstructor) {
    const {_id, type} = ingredient;
    switch(type) {
      case INGREDIENTS_TYPES.BUN.type: {
        dispatch(changeBunsAction(_id));
        dispatch(setBunsAction(ingredient));
        break;
      }
      default: {
        dispatch(increaseIngredientAction(_id));
        dispatch(addIngredientAction({ ...ingredient, uniqId: uuidv4() }));
        break;
      }
    }
  }

  function handleCloseModal() {
    dispatch(closeOrderDetailsModal())
    if(!orderError) {
      dispatch(clearConstructorAction());
      dispatch(clearQuantityAction());
    }
  }

  function createOrderHandler() {
    if (!isAuthenticated) {
      navigate('/login')
    }
    if (bun){
      dispatch(openOrderDetailsModal());
      const order = [bun._id, ...ingredients.map((ingredient: TIngredientConstructor) => ingredient._id), bun._id]
      dispatch(createOrder(order));
    }
  }

  const totalPrice = useMemo(()=> {
    return ingredients.reduce((sum: number, ingredient: TIngredientConstructor) => {
      if (ingredient.price) {
        return sum + ingredient.price
      }
      return sum;
    }, 0) + (bun ? 2 * bun.price : 0);
  }, [bun, ingredients])

  const borderColor = canDrop ? '#4c4cff' : 'transparent';

  return (
    <section className={`${styles.constructor} mt-25 mb-10`} >
      <div className={styles.ingredients_container} ref={dropRef} style={{borderColor}}  data-test="constructor">
        {bun ? (
          <div className={`${styles.bun} ml-8`}>
            <ConstructorElement
              text={`${bun.name} (Верх)`}
              isLocked={true}
              price={bun.price}
              thumbnail={bun.image_mobile}
              type="top"
            />
          </div>
        ) : (
              <ConstructorInfoElement>Выберите булку</ConstructorInfoElement>
            )
          }

        <div>
          <ul className={`${styles.list} custom-scroll`}>
            {ingredients.length > 0 ? (
              ingredients.map((ingredient: TIngredientConstructor, index: number) => (
                <ConstructorIngredient ingredient={ingredient} index={index} key={ingredient.uniqId}  />
              )) 
            ) : (
                  <ConstructorInfoElement>Выберите соусы и начинки для бургера</ConstructorInfoElement>
                )
              }
          </ul>
        </div>
        {bun && (
          <div className={`${styles.bun} ml-8`}>
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
          <span className="text text_type_main-large" data-test="total-price">
            {totalPrice}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          data-test="order-btn"
          onClick={createOrderHandler}
          htmlType="button"
          type="primary"
          size="large"
          disabled={!bun && !isAuthenticated}
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