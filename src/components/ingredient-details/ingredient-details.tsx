import styles from "./ingredient-details.module.css";
import {FC, useEffect} from "react";
import { useSelector, useDispatch } from "../../services/types";
import { useParams } from "react-router-dom";
import { selectIngredientAction } from "../../services/actions/ingredient-details";
import { TIngredient } from "../../types";
import Preloader from "../preloader/preloader";


const IngredientDetails: FC = () => {
  const selectedIngredient = useSelector((store) => store.ingredientDetails.selectedIngredient);
  const dispatch = useDispatch();

  const ingredients = useSelector((store:any) => store.ingredients.ingredients);
  const { ingredientId } = useParams();

  useEffect(() => {
    if (!selectedIngredient && ingredientId  && ingredients) {
      const ingredient = ingredients.find((ingredient: TIngredient) => ingredient._id === ingredientId );
      dispatch(selectIngredientAction(ingredient))
    }
  }, [selectedIngredient, ingredientId , ingredients, dispatch]);
  
  if (!selectedIngredient) {
    return (
        <Preloader header={"Загружаю сведения об ингредиенте..."}/>
    )
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