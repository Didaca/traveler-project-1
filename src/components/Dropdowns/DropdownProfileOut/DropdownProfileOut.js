import styles from './DropdownProfileOut.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthorContext } from '../../../contexts/AuthorContext';


export const DropdownProfileOut = () => {

    const {
        userId,
        onLogout } = useContext(AuthorContext);


    return (
        <div className={styles.dropdown_profile_out}>
            <Link to={`/profile/${userId}`} className={styles.profile}>Your Profile</Link>
            <p className={styles.logout} onClick={() => { onLogout() }}>Logout</p>
        </div>
    );
}