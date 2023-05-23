import { useContext } from 'react';
import { IdContext } from '../../../contexts/IdContext';
import styles from './SendTestimonial.module.css';


export const SendTestimonial = () => {

    const {
        onAddTestimonial
    } = useContext(IdContext);

    const onSubmitTestimonial = (e) => {
        e.preventDefault()

        const obj = Object.fromEntries(new FormData(e.target));

        onAddTestimonial({...obj});
    }

    return (
        <section className={styles.section_testimonial} data-testid="send-testimonial">
            <header className={styles.testimonial_header}>
                <form className={styles.testimonial_form} onSubmit={onSubmitTestimonial}>
                    <h2>Your Testimonial</h2>
                    <div className={styles.testimonial_form_inputbox}>
                        <textarea name="text" placeholder="Text..." required maxLength="200"></textarea>
                    </div>
                    <button className={styles.testimonial_button} type="submit" >Submit</button>
                </form>
            </header>
        </section>
    );
}