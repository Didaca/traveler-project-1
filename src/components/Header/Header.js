import { Link } from 'react-router-dom';
import { TbAmpersand } from 'react-icons/tb';
import styles from './Header.module.css';


export const Header = () => {
  return (
    <>
      <header className={styles.header} id="header" data-testid="header">
        <div className={styles.header_text}>
          <h4 className={styles.h4}>Tours <TbAmpersand /> Travel</h4>
          <h1 className={styles.h1}>Let's Discover The World Together</h1>
          <Link to="" className={styles.btn} >Book Now</Link>
        </div>
      </header>
    </>
  );
}