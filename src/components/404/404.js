import styles from './404.module.css';
import { Link } from 'react-router-dom';



export const Error404 = () => {
    return (
        <section className={styles.section_404}>
            <div className={styles.cube}>
                <div className={styles.up}></div>
                <div className={styles.param}>
                    <span className={styles.span} style={{"--i":0}}>error 404</span>
                    <span className={styles.span} style={{"--i":1}}>error 404</span>
                    <span className={styles.span} style={{"--i":2}}>error 404</span>
                    <span className={styles.span} style={{"--i":3}}>error 404</span>
                </div>
            </div>
            <div className={styles.message}>
                <p><span className={styles.message_span}>Sorry</span>, page not found!</p>
                <p>We`ve looked practically everywhere. </p>
                <p>Double-check the URL, go back, or go to the <Link to="/">Home</Link> page.</p>
            </div>
        </section>
    );
}