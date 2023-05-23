import styles from './About.module.css';
import { BsGlobeEuropeAfrica } from "react-icons/bs";
import { FaMoneyCheckAlt, FaAward } from "react-icons/fa";


export const About = () => {
  return (
    <section className={styles.section_about} id="about">
      <div className={styles.inherit_section}>
        <div className={styles.inherit_section_about}>
          <div className={styles.about_main_picture}>
            <img className={styles.about_main_picture_img} src="/images/about-main.jpg" alt="Bridge" />
          </div>
          <div className={styles.about_info}>
            <h6 className={styles.about_info_h6}>About Us</h6>
            <h1 className={styles.about_info_h1}>We Provide Best Tour Packages In Your Budget</h1>
            <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
            <div className={styles.about_info_pictures}>
              <div className={styles.about_info_picture_1}>
                <img className="" src="/images/about-picture-left.jpg" alt="Lantern" />
              </div>
              <div className={styles.about_info_picture_2}>
                <img className="" src="/images/about-picture-right.jpg" alt="Hammer" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section_articles}>
          <div className={styles.conteiner_articles}>
            <article className={styles.article}>
              <div className={styles.article_conteiner}>
                <div className={styles.article_icon}>
                  <FaMoneyCheckAlt />
                </div>
                <div className={styles.article_text}>
                  <h5 className={styles.article_h5}>Competitive Pricing</h5>
                  <p className={styles.article_paragraph}>Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                </div>
              </div>
            </article>
            <article className={styles.article}>
              <div className={styles.article_conteiner}>
                <div className={styles.article_icon}>
                  <FaAward />
                </div>
                <div className={styles.article_text}>
                  <h5 className={styles.article_h5}>Best Services</h5>
                  <p className={styles.article_paragraph}>Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                </div>
              </div>
            </article>
            <article className={styles.article}>
              <div className={styles.article_conteiner}>
                <div className={styles.article_icon}>
                  <BsGlobeEuropeAfrica />
                </div>
                <div className={styles.article_text}>
                  <h5 className={styles.article_h5}>Worldwide Coverage</h5>
                  <p className={styles.article_paragraph}>Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}