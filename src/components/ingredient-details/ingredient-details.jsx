import React from "react";
import styles from "./ingredient-details.module";

const IngredientDetails = () => {
  return (
    <div className={`${styles.product_card} mt-10 ml-10 mr-10`}>
      <img
        src="https://code.s3.yandex.net/react/code/bun-02.png"
        alt="Биокотлета из марсианской Магнолии"
        className="mb-4"
      />
      <h2 className="mb-8">Биокотлета из марсианской Магнолии</h2>
      <div className={`${styles.product_details} + "mb-15"`}>
        <div className="text text_type_main-small text_color_inactive">
          <p className="mb-2">Калории,ккал</p>
          <p>244,4</p>
        </div>
        <div className="text text_type_main-small text_color_inactive">
          <p className="mb-2">Белки, г</p>
          <p>12,2</p>
        </div>
        <div className="text text_type_main-small text_color_inactive">
          <p className="mb-2">Жиры, г</p>
          <p>17,2</p>
        </div>
        <div className="text text_type_main-small text_color_inactive">
          <p className="mb-2">Углеводы, г</p>
          <p>10,2</p>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;
