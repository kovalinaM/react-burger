import {FC} from "react";
import styles from "./preloader.module.css"

const Preloader: FC = () => {
    return (
        <div className={styles.preloader}>
            <div  className={styles.loader}></div>
        </div>
    )
}


export default Preloader;