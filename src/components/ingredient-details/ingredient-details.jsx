import React from "react";
import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ingredient}) => {
  console.log(ingredient)
  return (
    <div className={styles.product_card}>
      <img
        src="https://code.s3.yandex.net/react/code/sp_1-large.png"
        alt="Биокотлета из марсианской Магнолии"
        className="mb-4"
      />
      <h2 className="mb-8">{ingredient?.name}</h2>
      <div className={`${styles.product_details} mb-15`}>
        <div className={`${styles.product_detail} text text_type_main-small text_color_inactive`}>
          <p className="mb-2">Калории,ккал</p>
          <p>244,4</p>
        </div>
        <div className={`${styles.product_detail} text text_type_main-small text_color_inactive`}>
          <p className="mb-2">Белки, г</p>
          <p>12,2</p>
        </div>
        <div className={`${styles.product_detail} text text_type_main-small text_color_inactive`}>
          <p className="mb-2">Жиры, г</p>
          <p>17,2</p>
        </div>
        <div className={`${styles.product_detail} text text_type_main-small text_color_inactive`}>
          <p className="mb-2">Углеводы, г</p>
          <p>10,2</p>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
