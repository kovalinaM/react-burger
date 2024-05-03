import React, {FC} from "react";
import {TIngredient} from "../../types";
import styles from "./ingredients-preview-icon.module.css";

type TIngredientPreview = {
    ingredient: TIngredient;
    index: number;
    rest?: number;
    withCascade?: boolean;
}

const IngredientPreviewIcon: FC<TIngredientPreview> = ({ ingredient, index, rest, withCascade }) => {
    const { image_mobile, name } = ingredient;
    const style = withCascade ? {
        zIndex: 6 - index,
        marginRight: -16,
    } : {
        zIndex: 1,
    };

    return (
        <div className={styles.container} style={style}>
            <img className={styles.image} src={image_mobile} alt={name} />
            {
                !!rest && index === 5 && (
                    <p className={`${styles.overlay} text text_type_main-default`}>{`+${rest}`}</p>
                )
            }
        </div>

    );
};

export default IngredientPreviewIcon;