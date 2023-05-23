import styles from './DropdownProfileIn.module.css';
import { Link } from 'react-router-dom';


export const DropdownProfileIn = () => {
    return (
        <div className={styles.dropdown_profile_in}>
            <Link to="/login" className={styles.login}>LogIn</Link>
            <Link to="/registration" className={styles.signup}>SignUp</Link>
        </div>
    );
}