import {FC} from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredient.module.css";
import {useDrag} from "react-dnd";

import { TIngredient } from "../../utils/types";

type TBurgerIngredient = {
  ingredient: TIngredient;
  onSelect: (ingredient: TIngredient) => void;
}
const BurgerIngredient:FC<TBurgerIngredient> = ({ ingredient,  onSelect }) => {
  const location = useLocation();

  const [,dragRef] = useDrag({
    type: 'ingredients',
    item: ingredient
  })

  return (
    <>
      <li ref={dragRef}>
      <Link  to={`/ingredients/${ingredient._id}`} state={{ background: location }}>
        <article className={styles.card} onClick = {() => onSelect(ingredient)}>
          { !!ingredient.count &&
            <Counter count={ingredient.count} size="default" extraClass="m-1" />
          }
          <div className="mb-1">
            <img src={ingredient.image} alt={ingredient.name} />
          </div>
          <div className={styles.price}>
            <span className="text text_type_main-medium">
              {ingredient.price}
            </span>
            <CurrencyIcon type="primary" />
          </div>
          <div
            className={`${styles.name} text text_type_main-default mt-1 pb-3`}
          >
            {ingredient.name}
          </div>
        </article>
        </Link>
      </li>
    </>
  );
};

export default BurgerIngredient;
