import {FC} from "react";
import styles from "./constructor-info-element.module.css"

interface IConstructorInfo {
    children: string;
}

const ConstructorInfoElement:FC<IConstructorInfo> = ({children}) => {
    
    return (
        <div className={`${styles.info} ml-8`}>
            <p className="text text_type_main-default text_color_inactive">{children}</p>
        </div>
    )
}

export default ConstructorInfoElement;