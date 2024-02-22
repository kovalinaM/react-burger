import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";

import {ingredientType} from '../../utils/types'

import styles from "./burger-ingredients.module.css";

export default function BurgerIngredients(props) {
  const [current, setCurrent] = useState("buns");
  const ingredients = props.ingredients;

  const listBun = ingredients.filter((item) => item.type === "bun");
  const listFillings = ingredients.filter((item) => item.type === "main");
  const listSauces = ingredients.filter((item) => item.type === "sauce");

  const handleTabClick = (tab) => {
    setCurrent(tab);
    const tabElement = document.getElementById(tab);
    tabElement.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (e) => {
    const container = e.target;
    const scrollPosition = container.scrollTop;
    const bunElement = document.getElementById("buns");
    const sauceElement = document.getElementById("sauces");
    const mainElement = document.getElementById("main");

    const bunPosition = bunElement.getBoundingClientRect().top;
    const saucePosition = sauceElement.getBoundingClientRect().top;
    const mainPosition = mainElement.getBoundingClientRect().top;

    if (scrollPosition >= mainPosition) {
      setCurrent("main");
    } else if (scrollPosition >= saucePosition) {
      setCurrent("sauces");
    } else if (scrollPosition < bunPosition) {
      setCurrent("buns");
    }
  };

  return (
    <section className="pt-10 pb-10">
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: "flex" }} className="mt-5">
        <Tab 
          value="buns" 
          active={current === "buns"} 
          onClick={handleTabClick}
        >
          Булки
        </Tab>
        <Tab
          value="sauces"
          active={current === "sauces"}
          onClick={handleTabClick}
        >
          Соусы
        </Tab>
        <Tab 
          value="main" 
          active={current === "main"} 
          onClick={handleTabClick}
        >
          Начинки
        </Tab>
      </div>
      <div
        onScroll={handleScroll}
        className={`${styles.scrollarea} custom-scroll`}
      >
        <div id="buns" className="mt-10">
          <h2 className="text text_type_main-medium mb-6">Булки</h2>
          <ul className={`${styles.list} mt-6`}>
            {listBun.map((ingredient) => (
              <li key={ingredient._id}>
                <BurgerIngredient ingredient={ingredient} />
              </li>
            ))}
          </ul>
        </div>
        <div id="sauces" className="mt-10">
          <h2 className="text text_type_main-medium  mb-6">Соусы</h2>
          <ul className={styles.list}>
            {listSauces.map((ingredient) => (
              <li key={ingredient._id}>
                <BurgerIngredient ingredient={ingredient} />
              </li>
            ))}
          </ul>
        </div>
        <div id="main" className="mt-10">
          <h2 className="text text_type_main-medium  mb-6">Начинки</h2>
          <ul className={styles.list}>
            {listFillings.map((ingredient) => (
              <li key={ingredient._id}>
                <BurgerIngredient ingredient={ingredient} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};
