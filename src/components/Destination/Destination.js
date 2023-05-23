import styles from './Destination.module.css';


export const Destination = () => {
    return (
        <section className={styles.section_destinations} id="destination" >
            <div className={styles.destination_container}>
                <div className={styles.destination_content}>
                    <h6 className={styles.destination_content_h6}>Destination</h6>
                    <h1 className={styles.destination_content_h1}>Explore Top Destination</h1>
                </div>
                <div className={styles.section_destination_articles}>
                    <article className={styles.article_destination}>
                        <div className={styles.article_destination_content}>
                            <img src="/images/north-africa.jpg" alt="North Africa" />
                            <div className={styles.article_destination_content_text}>
                                <p>North Africa</p>
                                <p>30 Cities</p>
                            </div>
                        </div>
                    </article>
                    <article className={styles.article_destination}>
                        <div className={styles.article_destination_content}>
                            <img src="/images/uk.jpg" alt="UK" />
                            <div className={styles.article_destination_content_text}>
                                <p>United Kingdom</p>
                                <p>80 Cities</p>
                            </div>
                        </div>
                    </article>
                    <article className={styles.article_destination}>
                        <div className={styles.article_destination_content}>
                            <img src="/images/login-register.jpg" alt="North America" />
                            <div className={styles.article_destination_content_text}>
                                <p>North America</p>
                                <p>100 Cities</p>
                            </div>
                        </div>
                    </article>
                    <article className={styles.article_destination}>
                        <div className={styles.article_destination_content}>
                            <img src="/images/thailand.jpg" alt="Thailand" />
                            <div className={styles.article_destination_content_text}>
                                <p>Thailand</p>
                                <p>20 Cities</p>
                            </div>
                        </div>
                    </article>
                    <article className={styles.article_destination}>
                        <div className={styles.article_destination_content}>
                            <img src="/images/south-america.jpg" alt="South America" />
                            <div className={styles.article_destination_content_text}>
                                <p>South America</p>
                                <p>100 Cities</p>
                            </div>
                        </div>
                    </article>
                    <article className={styles.article_destination}>
                        <div className={styles.article_destination_content}>
                            <img src="/images/europe.jpg" alt="Europe" />
                            <div className={styles.article_destination_content_text}>
                                <p>Europe</p>
                                <p>300 Cities</p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}