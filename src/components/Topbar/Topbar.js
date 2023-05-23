import { Link } from 'react-router-dom';
import styles from './Topbar.module.css';


export const Topbar = () => {
  return (
    <section className={styles.container_top} id="topbar" >
      <div className={styles.row}>
        <div className={styles.textL}>
          <p><i className="fa-solid fa-envelope"></i>d.v.ivanov.dvi@gmail.com</p>
          <p className="">|</p>
          <p><i className="fa-solid fa-phone"></i>+359 877 041 238</p>
        </div>
        <div className={styles.textR}>
          <Link className={styles.hover} to="/">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link className={styles.hover} to="/">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link className={styles.hover} to="/">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link className={styles.hover} to="/">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link className={styles.hover} to="/">
            <i className="fab fa-youtube"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}