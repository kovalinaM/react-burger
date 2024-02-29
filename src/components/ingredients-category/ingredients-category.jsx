import React from "react";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import styles from "./ingredients-category.module.css";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";

const IngredientsCategory = ({ title, type, ingredients }) => {
    return (
        <div id={`${type}`} className="mt-10">
            <h2 className="text text_type_main-medium mb-6">{title}</h2>
            <ul className={`${styles.list} mt-6`}>
                {ingredients.map((ingredient) => (
                    <li key={ingredient._id}>
                        <BurgerIngredient ingredient={ingredient} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

IngredientsCategory.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

export default IngredientsCategory;
