import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IdContext } from '../../../contexts/IdContext';

import { GetOneTestimonial } from '../../../services/TestimonialService';

import styles from '../SendTestimonials/SendTestimonial.module.css';


export const EditTestimonial = () => {

    const { testimonialId } = useParams();
    const [ text, setText ] = useState('');


    const {
        onEditTestimonial,
        onDeleteTestimonial
    } = useContext(IdContext);

    


    useEffect(() => {
        GetOneTestimonial(testimonialId)
        .then(data => setText(data.text))
    }, [testimonialId])



    const onInputHandler = (e) => {
        setText(e.target.value)
    }


    const onSubmitTestimonial = (e) => {
        e.preventDefault()

        const obj = Object.fromEntries(new FormData(e.target));

        onEditTestimonial(testimonialId, {...obj});
    }

    return (
        <section className={styles.section_testimonial} id="edit" data-testid="edit-testimonial">
            <header className={styles.testimonial_header}>
                <form className={styles.testimonial_form} onSubmit={onSubmitTestimonial}>
                    <h2>Edit Testimonial</h2>
                    <div className={styles.testimonial_form_inputbox}>
                        <textarea name="text" required maxLength="200" value={text} onChange={onInputHandler}></textarea>
                    </div>
                    <button className={styles.testimonial_button_edit} type="submit">Edit</button>
                    <button className={styles.testimonial_button_delete} type="submit" onClick={() => {onDeleteTestimonial(testimonialId)}}>Delete</button>
                </form>
            </header>
        </section>
    );
}