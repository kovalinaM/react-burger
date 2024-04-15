import styles from "./not-found.module.css";
import { Link } from "react-router-dom";
import notFound from "../../images/404.svg";
import earth from "../../images/earth.svg";
import astronaut from "../../images/astronaut.svg";
import moon from "../../images/moon.png";

export function NotFoundPage() {
  return (
    <div className={styles.stars}>
      <div className={styles.central_body}>
        <img
          className={styles.image_404}
          src={notFound}
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
            src={earth}
            width="100px"
            alt="Earth"
          />
          <img
            className={styles.object_moon}
            src={moon}
            width="80px"
            alt="Moon"
          />
        </div>
        <div className={styles.box_astronaut}>
          <img
            className={styles.object_astronaut}
            src={astronaut}
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
