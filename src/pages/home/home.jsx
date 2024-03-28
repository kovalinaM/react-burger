import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import styles from "./home.module.css";

import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import Preloader from "../../components/preloader/preloader";

import { useSelector } from "react-redux";

const getIngredients = (store) => store.ingredients.ingredients;
const getIngredientsLoading = (store) => store.ingredients.ingredientsLoading;
const getIngredientsFailed = (store) => store.ingredients.ingredientsFailed;

export function HomePage() {
  const ingredients = useSelector(getIngredients);
  const ingredientsLoading = useSelector(getIngredientsLoading);
  const ingredientsFailed = useSelector(getIngredientsFailed);

  return (
    <main className={styles.sections}>
      <DndProvider backend={HTML5Backend}>
        {ingredientsLoading && <Preloader />}
        {ingredientsFailed && "Произошла ошибка"}
        {!ingredientsLoading && !ingredientsFailed && ingredients && (
          <>
            <BurgerIngredients />
            <BurgerConstructor />
          </>
        )}
      </DndProvider>
    </main>
  );
}
