import React from "react";
import PropTypes from "prop-types";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerIngredient from "../burger-ingredient/burger-ingredient";

import styles from "./burger-ingredients.module.css";

export default function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("buns");
  const ingredients = props.data;

  const listBun = ingredients.filter((item) => item.type === "bun");
  const listFillings = ingredients.filter((item) => item.type === "main");
  const listSauces = ingredients.filter((item) => item.type === "sauce");

  return (
    <section className="pt-10">
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: "flex" }} className="mt-5">
        <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.scrollarea}>
        <div className="mt-10">
          <h2 className="text text_type_main-medium">Булки</h2>
          <ul className={styles.list}>
            {listBun.map((ingredient, index) => (
              <li key={index}>
                <BurgerIngredient ingredient={ingredient} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="text text_type_main-medium">Соусы</h2>
          <ul className={styles.list}>
            {listSauces.map((ingredient, index) => (
              <li key={index}>
                <BurgerIngredient ingredient={ingredient} />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="text text_type_main-medium">Начинки</h2>
          <ul className={styles.list}>
            {listFillings.map((ingredient, index) => (
              <li key={index}>
                <BurgerIngredient ingredient={ingredient} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

BurgerIngredient.propTypes = {
  ingredient: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
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
    })
  ).isRequired,
};
