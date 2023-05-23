import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Navbar.module.css';
import { SlArrowDown } from "react-icons/sl";
import { RiUser2Fill } from "react-icons/ri";
import { DropdownProfileIn } from '../Dropdowns/DropdownProfileIn/DropdownProfileIn';
import { DropdownProfileOut } from '../Dropdowns/DropdownProfileOut/DropdownProfileOut';
import { useContext } from 'react';
import { AuthorContext } from '../../contexts/AuthorContext';

export const Navbar = () => {


  const {
    show, 
    isLogged,
    onShowHandler
  } = useContext(AuthorContext);


  return (
    <nav className={styles.container} id="navigation" data-testid="nav" >
      <div className={styles.inherit_container}>
        <header className={styles.navbar}>
          <Link to="/" className={styles.navbar_h1}>
            <h1><span className={styles.navbar_h1_span}>TRAVEL</span>ER</h1>
          </Link>
          <div className={styles.navbar_collapse}>
            <div className={styles.navbar_nav}>
              <Link to="/" className={styles.nav_item_home}>Home</Link>
              <HashLink smooth to="/#about" className={styles.nav_item_about}>About</HashLink>
              <HashLink smooth to="/destinations/#destination" className={styles.nav_item_services}>Destination</HashLink>
              <HashLink smooth to="/packages/#packages" className={styles.nav_item_packages}>Tour Packages</HashLink>
              <div className={styles.navbar_dropdown}>

                {isLogged
                  ? (<span className={styles.nav_profile} onClick={onShowHandler} data-testid="prof-icon" ><RiUser2Fill /></span>)
                  : (<span className={styles.nav_profile} onClick={onShowHandler}>Profile<SlArrowDown /></span>)
                }

                {show && <div className={styles.dropdown_profile}>

                  {isLogged
                    ? (<DropdownProfileOut />)
                    : (<DropdownProfileIn />)
                  }

                </div>}

              </div>
              <HashLink smooth to="#contact" className={styles.nav_contact}>Contact</HashLink>
            </div>
          </div>
        </header>
      </div>
    </nav>
  );
}