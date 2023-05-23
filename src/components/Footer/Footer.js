import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer} id="footer" data-testid="footer">
            <div className={styles.footer_left_section}>
                <div className={styles.footer_info}>
                    <HashLink smooth to="/#topbar" className={styles.footer_h1}>
                        <h1><span className={styles.footer_h1_span}>TRAVEL</span>ER</h1>
                    </HashLink>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dolorem impedit! Autem quos deserunt, minima, cupiditate praesentium iure exercitationem explicabo nemo recusandae quisquam, officia assumenda.</p>
                    <h6 className={styles.footer_info_h6}>Follow Us</h6>
                    <div className={styles.social_links}>
                        <Link className={styles.social_links_fa_brands} to="#"><i className="fa-brands fa-twitter"></i></Link>
                        <Link className={styles.social_links_fa_brands} to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link className={styles.social_links_fa_brands} to="#"><i className="fa-brands fa-linkedin"></i></Link>
                        <Link className={styles.social_links_fa_brands} to="#"><i className="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
                <div className={styles.col_services}>
                    <h5 className={styles.col_services_h5}>Our Services</h5>
                    <div className={styles.col_services_content}>
                        <HashLink className={styles.fa_angle_right} smooth to="/#about"><i className="fa-solid fa-angle-right"></i>About</HashLink>
                        <HashLink className={styles.fa_angle_right} smooth to="/destinations/#destination"><i className="fa-solid fa-angle-right"></i>Destination</HashLink>
                        <Link className={styles.fa_angle_right} to="#"><i className="fa-solid fa-angle-right"></i>Services</Link>
                        <HashLink className={styles.fa_angle_right} smooth to="/packages/#packages"><i className="fa-solid fa-angle-right"></i>Packages</HashLink>
                        <Link className={styles.fa_angle_right} to="#"><i className="fa-solid fa-angle-right"></i>Guides</Link>
                        <HashLink className={styles.fa_angle_right} smooth to="/packages/#testimonials"><i className="fa-solid fa-angle-right"></i>Testimonial</HashLink>
                        <Link className={styles.fa_angle_right} to="#"><i className="fa-solid fa-angle-right"></i>Blog</Link>
                    </div>
                </div>
                <div className={styles.contact_footer} id="contact" data-testid="contact">
                    <h5 className={styles.contact_footer_h5}>Contact Us</h5>
                    <p><i className="fa-solid fa-map-marker"></i>143 Street, Sofia, BG</p>
                    <p><i className="fa-solid fa-phone"></i>+359 877 041238</p>
                    <p><i className="fa-solid fa-envelope"></i>d.v.ivanov.dvi@gmail.com</p>
                </div>
            </div>
            <hr></hr>
            <div className={styles.footer_right_section} data-testid="info">
                    <div className={styles.copyright}>
                        <p className="">Copyright &copy; <Link to="https://github.com/Didaca" target="_blanck">Deyan Ivanov</Link>. All Rights Reserved.
                        </p>
                    </div>
                    <div className={styles.design}>
                        <p className="">Designed by <Link to="https://dvi-resume.web.app" target="_blanck" >DVI</Link>
                        </p>
                    </div>
            </div>
        </footer>
    );
}