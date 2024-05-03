import {FC} from "react";
import styles from "./preloader.module.css"

interface PreloaderProps {
    header?: string; // Здесь указываем тип и указываем, что пропс необязательный
}

const Preloader: FC<PreloaderProps> = ({header}) => {
    return (
        <div className={styles.container}>
            {header && <h1 className="text text_type_main-medium pb-6">{header}</h1>}
            <div className={styles.preloader}>
                <div className={styles.loader}></div>
            </div>
        </div>

    )
}


export default Preloader;