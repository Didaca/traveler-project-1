import styles from './Testimonials.module.css';
import { FaRegUser } from 'react-icons/fa';
import { FaRegEdit } from 'react-icons/fa';

import { TestimonialsFooter } from './TestimonialsFooter';
import { IdContext } from '../../../contexts/IdContext';
import { AuthorContext } from '../../../contexts/AuthorContext';

// import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';




export const Testimonials = () => {

    const {
        userId,
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
                    {haveTestim && testim_obj.forEach((t) =>
                        {<article className={styles.testimonials_article_info} key={t._id}>
                            <div className={styles.testimonials_info_content}>
                                {t.picture
                                    ? (<img className={styles.img} src={t.picture} alt="Owner" />)
                                    : (< FaRegUser className={styles.img} />)
                                }
                                <div className={styles.testimonials_info_content_text}>
                                    <p className={styles.testimonial_p}>{t.text}</p>
                                    {t.firstname
                                        ? (<><h5 className={styles.testimonials_info_name}>{t.firstname}</h5>
                                            <h5 className={styles.testimonials_info_name}>{t.lastname}</h5>
                                            <span>{t.profession}</span></>)
                                        : (<><h5 className={styles.testimonials_info_name}>First Name</h5>
                                            <h5 className={styles.testimonials_info_name}>Last Name</h5>
                                            <span>profession</span></>)
                                    }
                                    {(t._ownerId === userId) && <HashLink to={`/testimonial/${t._id}/#topbar`}><FaRegEdit className={styles.edit_link} /></HashLink>}
                                </div>
                            </div>
                        </article>}
                        )}
                    <article className={styles.testimonials_article_info}>
                        <div className={styles.testimonials_info_content}>
                            <img className={styles.img} src="/images/testimonial-3.jpg" alt="Owner" />
                            <div className={styles.testimonials_info_content_text}>
                                <p className={styles.testimonial_p}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu</p>
                                <h5 className={styles.testimonials_info_name}>Konstantin</h5>
                                <h5 className={styles.testimonials_info_name}>Konstantinov</h5>
                                <span>Architect</span>
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
                                <span>Designer</span>
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
                                <span>Bus driver</span>
                            </div>
                        </div>
                    </article>
                </div>

                {isLogged && <TestimonialsFooter />}

            </div>
        </section >
    );
}