import { HashLink } from 'react-router-hash-link';
import styles from './Testimonials.module.css';

export const TestimonialsFooter = () => {
    return (
        <div className={styles.testimonials_footer}>
            <HashLink to="/testimonial/#topbar" className={styles.testimonials_footer_link}>Your Testimonial</HashLink>
        </div>);
}