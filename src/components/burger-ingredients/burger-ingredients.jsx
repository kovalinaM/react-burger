import { useMemo } from "react";
import {useSelector, useDispatch} from "react-redux";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientsCategory from "../ingredients-category/ingredients-category"

import {TAB_SWITCH} from '../../services/actions/ingredients'
import {INGREDIENTS_TYPES} from '../../utils/constants'

import styles from "./burger-ingredients.module.css";
import { OPEN_INGREDIENT_MODAL, selectIngredient } from "../../services/actions/ingredient-details";

const getIngredients = (store) => store.ingredients.ingredients;
const getCurrentTab = (store) => store.ingredients.currentTab

const BurgerIngredients = () => {
  const ingredients = useSelector(getIngredients);
  const currentTab = useSelector(getCurrentTab);
  const dispatch = useDispatch();

  const categorizedIngredients = useMemo(() => {
    const categorized = {
      buns: [],
      main: [],
      sauces: [],
    };
  
    ingredients.forEach(item => {
      switch (item.type) {
        case INGREDIENTS_TYPES.BUN.type:
          categorized.buns.push(item);
          break;
        case INGREDIENTS_TYPES.MAIN.type:
          categorized.main.push(item);
          break;
        case INGREDIENTS_TYPES.SAUCE.type:
          categorized.sauces.push(item);
          break;
        default:
          break;
      }
    });
  
    return categorized;
  }, [ingredients]);
  
  const { buns, main, sauces } = categorizedIngredients;

  const switchTab = (currentTab) => {
    const SCROLL_PARAMS = {
      behavior: "smooth", 
      block: "start" 
    };

    const tabElement = document.getElementById(currentTab);

    dispatch({ type: TAB_SWITCH, currentTab });
    switch (currentTab) {
      case INGREDIENTS_TYPES.BUN.type:
        tabElement.scrollIntoView(SCROLL_PARAMS);
        break;
      case INGREDIENTS_TYPES.SAUCE.type:
        tabElement.scrollIntoView(SCROLL_PARAMS);
        break;
      case INGREDIENTS_TYPES.MAIN.type:
        tabElement.scrollIntoView(SCROLL_PARAMS);
        break;
      default:
        break;
    }
  };


  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;

    const sauceElement = document.getElementById("sauce");
    const mainElement = document.getElementById("main");

    const saucePosition = sauceElement.getBoundingClientRect().top;
    const mainPosition = mainElement.getBoundingClientRect().top;

    if (scrollTop >= mainPosition) {
      dispatch({
        type: TAB_SWITCH,
        currentTab: INGREDIENTS_TYPES.MAIN.type,
      });
    } else if (scrollTop < saucePosition) {
      dispatch({
        type: TAB_SWITCH,
        currentTab: INGREDIENTS_TYPES.BUN.type,
      });
    } else {
      dispatch({
        type:TAB_SWITCH,
        currentTab: INGREDIENTS_TYPES.SAUCE.type,
      });
    }
  };


  function handleClickIngredient(ingredient) {
    dispatch(selectIngredient(ingredient));
    dispatch({
      type: OPEN_INGREDIENT_MODAL
    });
  }

  return (
    <section className="pt-10 pb-10">
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: "flex" }} className="mt-5">
        <Tab
          value="bun"
          active={currentTab === "bun"}
          onClick={switchTab}
        >
          {INGREDIENTS_TYPES.BUN.title}
        </Tab>
        <Tab
          value="sauce"
          active={currentTab === "sauce"}
          onClick={switchTab}
        >
          {INGREDIENTS_TYPES.SAUCE.title}
        </Tab>
        <Tab
          value="main"
          active={currentTab === "main"}
          onClick={switchTab}
        >
          {INGREDIENTS_TYPES.MAIN.title}
        </Tab>
      </div>
      <div
        onScroll={handleScroll}
        className={`${styles.scrollarea} custom-scroll`}
      >
        <IngredientsCategory title={INGREDIENTS_TYPES.BUN.title} type={INGREDIENTS_TYPES.BUN.type} ingredients={buns} onSelect={handleClickIngredient}/>
        <IngredientsCategory title={INGREDIENTS_TYPES.SAUCE.title} type={INGREDIENTS_TYPES.SAUCE.type} ingredients={sauces} onSelect={handleClickIngredient}/>
        <IngredientsCategory title={INGREDIENTS_TYPES.MAIN.title} type={INGREDIENTS_TYPES.MAIN.type} ingredients={main} onSelect={handleClickIngredient}/>
      </div>
    </section>
  );
}

export default BurgerIngredients;