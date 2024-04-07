import {FC} from "react";
import { TIngredient } from "../../utils/types";
import styles from "./ingredients-category.module.css";

import BurgerIngredient from "../burger-ingredient/burger-ingredient";

interface TCategory {
    title: string;
    type: string;
    ingredients: TIngredient[];
    onSelect: (ingredient: TIngredient) => void;
}

const IngredientsCategory: FC<TCategory> = ({ title, type, ingredients, onSelect }) => {

  return (
    <div id={`${type}`} className="mt-10">
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={`${styles.list} mt-6`}>
        {ingredients.map((ingredient: TIngredient) => (
            <BurgerIngredient key={ingredient._id} ingredient={ingredient} onSelect={onSelect} />
        ))}
      </ul>
    </div>
  );
};

export default IngredientsCategory;
