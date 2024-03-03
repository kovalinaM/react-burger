import React, { useMemo } from "react";
import {useSelector, useDispatch} from "react-redux";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientsCategory from "../ingredients-category/ingredients-category"

import { ingredientType } from "../../utils/types";

import {CHANGE_BUNS, TAB_SWITCH} from '../../services/actions/ingredients'
import {INGREDIENTS_TYPES} from '../../utils/constants'

import styles from "./burger-ingredients.module.css";
import { OPEN_INGREDIENT_MODAL, selectIngredient } from "../../services/actions/ingredient-details";
import { INCREASE_INGREDIENT } from "../../services/actions/ingredients";
import { ADD_INGREDIENT, SET_BUNS } from "../../services/actions/burger-constructor";
import { v4 as uuidv4 } from 'uuid';

export default function BurgerIngredients() {
  const { ingredients, currentTab} = useSelector(store => store.ingredients);
  const dispatch = useDispatch();

  const buns = useMemo(
    () => ingredients.filter((item) => item.type === "bun"),
    [ingredients]
  );
  const main = useMemo(
    () => ingredients.filter((item) => item.type === "main"),
    [ingredients]
  );
  const sauces = useMemo(
    () => ingredients.filter((item) => item.type === "sauce"),
    [ingredients]
  );

  const switchTab = (currentTab) => {
    const SCROLL_PARAMS = {
      behavior: "smooth", 
      block: "start" 
    };

    const tabElement = document.getElementById(currentTab);

    dispatch({ type: TAB_SWITCH, currentTab });
    switch (currentTab) {
      case INGREDIENTS_TYPES.BUN.type:
        tabElement.scrollIntoView(SCROLL_PARAMS);
        break;
      case INGREDIENTS_TYPES.SAUCE.type:
        tabElement.scrollIntoView(SCROLL_PARAMS);
        break;
      case INGREDIENTS_TYPES.MAIN.type:
        tabElement.scrollIntoView(SCROLL_PARAMS);
        break;
      default:
        break;
    }
  };


  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;

    const sauceElement = document.getElementById("sauce");
    const mainElement = document.getElementById("main");

    const saucePosition = sauceElement.getBoundingClientRect().top;
    const mainPosition = mainElement.getBoundingClientRect().top;

    if (scrollTop >= mainPosition) {
      dispatch({
        type: TAB_SWITCH,
        currentTab: INGREDIENTS_TYPES.MAIN.type,
      });
    } else if (scrollTop < saucePosition) {
      dispatch({
        type: TAB_SWITCH,
        currentTab: INGREDIENTS_TYPES.BUN.type,
      });
    } else {
      dispatch({
        type:TAB_SWITCH,
        currentTab: INGREDIENTS_TYPES.SAUCE.type,
      });
    }
  };


  function handleClickIngredient(ingredient) {
    dispatch(selectIngredient(ingredient));
    dispatch({
      type: OPEN_INGREDIENT_MODAL
    });
  }

  return (
    <section className="pt-10 pb-10">
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: "flex" }} className="mt-5">
        <Tab
          value="bun"
          active={currentTab === "bun"}
          onClick={switchTab}
        >
          {INGREDIENTS_TYPES.BUN.title}
        </Tab>
        <Tab
          value="sauce"
          active={currentTab === "sauce"}
          onClick={switchTab}
        >
          {INGREDIENTS_TYPES.SAUCE.title}
        </Tab>
        <Tab
          value="main"
          active={currentTab === "main"}
          onClick={switchTab}
        >
          {INGREDIENTS_TYPES.MAIN.title}
        </Tab>
      </div>
      <div
        onScroll={handleScroll}
        className={`${styles.scrollarea} custom-scroll`}
      >
        <IngredientsCategory title={INGREDIENTS_TYPES.BUN.title} type={INGREDIENTS_TYPES.BUN.type} ingredients={buns} onSelect={handleClickIngredient}/>
        <IngredientsCategory title={INGREDIENTS_TYPES.SAUCE.title} type={INGREDIENTS_TYPES.SAUCE.type} ingredients={sauces} onSelect={handleClickIngredient}/>
        <IngredientsCategory title={INGREDIENTS_TYPES.MAIN.title} type={INGREDIENTS_TYPES.MAIN.type} ingredients={main} onSelect={handleClickIngredient}/>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType),
};
