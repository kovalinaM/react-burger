import React, { useRef } from "react";
import PropTypes from "prop-types";
import styles from "./constructor-ingredient.module.css";
import {
    DragIcon,
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientType } from "../../utils/types";

import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

import {
    MOVE_INGREDIENT,
    DELETE_INGREDIENT,
} from "../../services/actions/burger-constructor";
import { DECREASE_INGREDIENT } from "../../services/actions/ingredients";

const ConstructorIngredient = ({ ingredient, index }) => {
const { name, price, image_mobile, uniqId, _id } = ingredient;
const dispatch = useDispatch();
const ref = useRef(null);

const [, dragRef] = useDrag({
    type: "sortedIngredients",
    item: () => {
        return { uniqId, index };
    }
});

const [, dropRef] = useDrop({
    accept: "sortedIngredients",
    hover: (item, monitor) => {
        if (!ref.current) {
            return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
            return;
        }
        const hoverBoundingRect = ref.current.getBoundingClientRect();
        const clientOffset = monitor.getClientOffset();
        const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }
        dispatch({
            type: MOVE_INGREDIENT,
            dragIndex: dragIndex,
            hoverIndex: hoverIndex,
        });
        item.index = hoverIndex;
    },
});

dragRef(dropRef(ref));

function onDeleteIngredient(uniqId, _id) {
    dispatch({
        type: DELETE_INGREDIENT,
        uniqId: uniqId,
    });
    dispatch({
        type: DECREASE_INGREDIENT,
        _id: _id,
    });
}

    return (
        <li className={styles.item} key={`${uniqId}`} ref={ref}>
            <DragIcon type="primary" />
            <ConstructorElement
                text={name}
                price={price}
                thumbnail={image_mobile}
                handleClose={() => onDeleteIngredient(uniqId, _id)}
            />
        </li>
    );
};

ConstructorIngredient.propTypes = {
    ingredient: ingredientType.isRequired,
    index: PropTypes.number.isRequired
};

export default ConstructorIngredient;
