import styles from './Testimonials.module.css';
import { FaRegEdit } from 'react-icons/fa';

import { TestimonialsFooter } from './TestimonialsFooter';
import { IdContext } from '../../../contexts/IdContext';
import { AuthorContext } from '../../../contexts/AuthorContext';

// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';




export const Testimonials = () => {

    const {
        author,
        isLogged,
    } = useContext(AuthorContext);


    const {
        testim_obj,
        haveTestim
    } = useContext(IdContext);




    return (
        <section className={styles.testimonials_section} id="testimonials" data-testid="testimonial">
            <div className={styles.testimonials_container}>
                <div className={styles.testimonials_head}>
                    <h6 className={styles.testimonials_head_h6}>Testimonials</h6>
                    <h1>What Say Our Clients</h1>
                </div>
                <div className={styles.testimonials_container_articles}>
                    {haveTestim && testim_obj.map(t => 
                        <article className={styles.testimonials_article_info} key={t.userId}>
                            <div className={styles.testimonials_info_content}>
                                <img className={styles.img} src={t.userURL} alt="Owner" />
                                <div className={styles.testimonials_info_content_text}>
                                    <p className={styles.testimonial_p}>{t.text}</p>
                                    <h5 className={styles.testimonials_info_name}>{t.userName}</h5>
                                    {(t.userId === author.uid) && <HashLink to={`/testimonial/${t.userId}/#topbar`}><FaRegEdit className={styles.edit_link} /></HashLink>}
                                </div>
                            </div>
                        </article>
                    )}
                    <article className={styles.testimonials_article_info}>
                        <div className={styles.testimonials_info_content}>
                            <img className={styles.img} src="/images/testimonial-3.jpg" alt="Owner" />
                            <div className={styles.testimonials_info_content_text}>
                                <p className={styles.testimonial_p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
                                <h5 className={styles.testimonials_info_name}>Konstantin</h5>
                                <h5 className={styles.testimonials_info_name}>Konstantinov</h5>
                            </div>
                        </div>
                    </article>
                    <article className={styles.testimonials_article_info}>
                        <div className={styles.testimonials_info_content}>
                            <img className={styles.img} src="/images/testimonial-2.jpg" alt="Owner" />
                            <div className={styles.testimonials_info_content_text}>
                                <p className={styles.testimonial_p}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large.</p>
                                <h5 className={styles.testimonials_info_name}>Ivelina</h5>
                                <h5 className={styles.testimonials_info_name}>Ivanova</h5>
                            </div>
                        </div>
                    </article>
                    <article className={styles.testimonials_article_info}>
                        <div className={styles.testimonials_info_content}>
                            <img className={styles.img} src="/images/testimonial-1.jpg" alt="Owner" />
                            <div className={styles.testimonials_info_content_text}>
                                <p className={styles.testimonial_p}>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the gre</p>
                                <h5 className={styles.testimonials_info_name}>Georgi</h5>
                                <h5 className={styles.testimonials_info_name}>Georgiev</h5>
                            </div>
                        </div>
                    </article>
                </div>

                {isLogged && <TestimonialsFooter />}

            </div>
        </section >
    );
}