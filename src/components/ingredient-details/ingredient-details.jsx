import styles from "./ingredient-details.module.css";
import {useSelector}  from "react-redux";

const IngredientDetails = () => {
  const selectedIngredient = useSelector(store => store.ingredientDetails.selectedIngredient)
  
  if (!selectedIngredient) {
    return "Загружаю сведения об ингредиенте...";
  } 
  
  return (
    <div className={styles.product_card}>
      <img
        src={selectedIngredient.image_large}
        alt={selectedIngredient.name}
        width="480"
        height="240"
        className="mb-4"
      />
      <h2 className={`${styles.product_name} mb-8`}>{selectedIngredient.name}</h2>
      <div className={`${styles.product_details} mb-15`}>
        <div
          className={`${styles.product_detail} text text_type_main-small text_color_inactive`}
        >
          <p className="mb-2">Калории,ккал</p>
          <p>{selectedIngredient.calories}</p>
        </div>
        <div
          className={`${styles.product_detail} text text_type_main-small text_color_inactive`}
        >
          <p className="mb-2">Белки, г</p>
          <p>{selectedIngredient.proteins}</p>
        </div>
        <div
          className={`${styles.product_detail} text text_type_main-small text_color_inactive`}
        >
          <p className="mb-2">Жиры, г</p>
          <p>{selectedIngredient.fat}</p>
        </div>
        <div
          className={`${styles.product_detail} text text_type_main-small text_color_inactive`}
        >
          <p className="mb-2">Углеводы, г</p>
          <p>{selectedIngredient.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;