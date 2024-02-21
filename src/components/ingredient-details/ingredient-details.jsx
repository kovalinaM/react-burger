import React from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-details.module.css";

const IngredientDetails = (ingredient) => {
  if (!ingredient) {
    return "Загружаю сведения об ингредиенте...";
  } else {
    return (
      <div className={styles.product_card}>
        <img
          src={ingredient?.image_large}
          alt={ingredient?.name}
          width="480"
          height="240"
          className="mb-4"
        />
        <h2 className="mb-8">{ingredient?.name}</h2>
        <div className={`${styles.product_details} mb-15`}>
          <div
            className={`${styles.product_detail} text text_type_main-small text_color_inactive`}
          >
            <p className="mb-2">Калории,ккал</p>
            <p>{ingredient?.calories}</p>
          </div>
          <div
            className={`${styles.product_detail} text text_type_main-small text_color_inactive`}
          >
            <p className="mb-2">Белки, г</p>
            <p>{ingredient?.proteins}</p>
          </div>
          <div
            className={`${styles.product_detail} text text_type_main-small text_color_inactive`}
          >
            <p className="mb-2">Жиры, г</p>
            <p>{ingredient?.fat}</p>
          </div>
          <div
            className={`${styles.product_detail} text text_type_main-small text_color_inactive`}
          >
            <p className="mb-2">Углеводы, г</p>
            <p>{ingredient?.carbohydrates}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default IngredientDetails;

IngredientDetails.propTypes = {
  ingredient: PropTypes.shape({
    _id: PropTypes.string,
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
  }),
};
