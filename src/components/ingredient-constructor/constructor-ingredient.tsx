import { FC, useRef } from "react";
import styles from "./constructor-ingredient.module.css";
import {
    DragIcon,
    ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredientConstructor} from "../../utils/types";

import { useDrag, useDrop } from "react-dnd";
import type { XYCoord } from 'dnd-core'
import { useDispatch } from "react-redux";

import {
    MOVE_INGREDIENT,
    DELETE_INGREDIENT,
} from "../../services/actions/burger-constructor";
import { DECREASE_INGREDIENT } from "../../services/actions/ingredients";


interface  IConstructorIngredientProps {
    ingredient: TIngredientConstructor;
    index: number;
}

interface DragItem {
    index: number
    id: string
    type: string
}
const ConstructorIngredient: FC<IConstructorIngredientProps> = ({ ingredient, index }) => {
const { name, price, image_mobile, uniqId, _id } = ingredient;
const dispatch = useDispatch();
const ref = useRef<HTMLLIElement>(null);

const [, dragRef] = useDrag({
    type: "sortedIngredients",
    item: () => {
        return { uniqId, index };
    }
});

const [, dropRef] = useDrop({
    accept: "sortedIngredients",
    hover: (item: DragItem, monitor) => {
        if (!ref.current) {
            return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
            return;
        }
        const hoverBoundingRect = ref.current?.getBoundingClientRect();
        const clientOffset = monitor.getClientOffset();
        const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
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

function onDeleteIngredient(uniqId: string, _id: string) {
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

export default ConstructorIngredient;
