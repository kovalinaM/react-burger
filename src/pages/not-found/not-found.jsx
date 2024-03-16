import styles from "./not-found.module.css";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className={styles.stars}>
      <div className={styles.central_body}>
        <img
          className={styles.image_404}
          src="http://salehriaz.com/404Page/img/404.svg"
          width="300px"
          alt="404"
        />
        <Link to={{ pathname: `/` }} className={styles.btn_go_home}>
          GO BACK HOME
        </Link>
      </div>
      <div className={styles.objects}>
        <div className={styles.earth_moon}>
          <img
            className={styles.object_earth}
            src="http://salehriaz.com/404Page/img/earth.svg"
            width="100px"
            alt="Earth"
          />
          <img
            className={styles.object_moon}
            src="http://salehriaz.com/404Page/img/moon.svg"
            width="80px"
            alt="Moon"
          />
        </div>
        <div className={styles.box_astronaut}>
          <img
            className={styles.object_astronaut}
            src="http://salehriaz.com/404Page/img/astronaut.svg"
            width="140px"
            alt="Astronaut"
          />
        </div>
      </div>
      <div className={styles.glowing_stars}>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
        <div className={styles.star}></div>
      </div>
    </div>
  );
}
