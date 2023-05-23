import styles from './Packages.module.css';

export const Packages = () => {
    return (
        <section className={styles.section_packages} id="packages">
            <div className={styles.section_packages_content}>
                <div className={styles.content_content}>
                    <h6 className={styles.content_content_h6}>Packages</h6>
                    <h1 className={styles.content_content_h1}>Pefect Tour Packages</h1>
                </div>
                <div className={styles.section_packages_articles}>
                    <article className={styles.article_packages}>
                        <div className={styles.article_packages_content}>
                            <img src="/images/izrael.jpg" alt="Izrael" />
                            <div className={styles.article_packages_info}>
                                <div className={styles.article_packages_info_data}>
                                    <small><i className="fa fa-map-marker-alt text-primary"></i>Izrael</small>
                                    <small><i className="fa fa-calendar-alt text-primary"></i>3 days</small>
                                    <small><i className="fa fa-user text-primary"></i>2 Person</small>
                                </div>
                                <p>Discover amazing places of the world with us</p>
                                <div className={styles.article_packages_info_price}>
                                    <h6><i className="fa fa-star text-primary"></i>4.5 <small>(250)</small></h6>
                                    <h5>$350</h5>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className={styles.article_packages}>
                        <div className={styles.article_packages_content}>
                            <img src="/images/nederland.jpg" alt="Nederland" />
                            <div className={styles.article_packages_info}>
                                <div className={styles.article_packages_info_data}>
                                    <small><i className="fa fa-map-marker-alt text-primary"></i>Nederland</small>
                                    <small><i className="fa fa-calendar-alt text-primary"></i>5 days</small>
                                    <small><i className="fa fa-user text-primary"></i>2 Person</small>
                                </div>
                                <p>Discover amazing places of the world with us</p>
                                <div className={styles.article_packages_info_price}>
                                    <h6><i className="fa fa-star text-primary"></i>4.5 <small>(250)</small></h6>
                                    <h5>$600</h5>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className={styles.article_packages}>
                        <div className={styles.article_packages_content}>
                            <img src="/images/africa.jpg" alt="Africa" />
                            <div className={styles.article_packages_info}>
                                <div className={styles.article_packages_info_data}>
                                    <small><i className="fa fa-map-marker-alt text-primary"></i>Africa</small>
                                    <small><i className="fa fa-calendar-alt text-primary"></i>3 days</small>
                                    <small><i className="fa fa-user text-primary"></i>2 Person</small>
                                </div>
                                <p>Discover amazing places of the world with us</p>
                                <div className={styles.article_packages_info_price}>
                                    <h6><i className="fa fa-star text-primary"></i>4.5 <small>(250)</small></h6>
                                    <h5>$450</h5>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}