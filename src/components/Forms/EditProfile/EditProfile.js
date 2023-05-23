import styles from './EditProfile.module.css';
import { BsMailbox2 } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { useContext, useState } from 'react';
import { AuthorContext } from '../../../contexts/AuthorContext';



export const EditProfile = () => {

    const {
        author,
        onEdit
    } = useContext(AuthorContext)

    const [values, setValues] = useState({
        name: author.displayName,
        email: author.email,
        picture: author.photoURL
    })

    const onInputHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const onSubmitEdit = (e) => {
        e.preventDefault();

        const obj = Object.fromEntries(new FormData(e.target));
        onEdit(obj);
    }

    return (
        <section className={styles.section_edit_prof}>
            <article className={styles.edit_prof_article}>
                <div className={styles.edit_prof_article_container}>
                    <div className={styles.prof_image}>
                        <img src={author.photoURL} alt="Profile" />
                    </div>
                    <div className={styles.prof_info}>
                        <form className={styles.edit_prof_form} onSubmit={onSubmitEdit}>
                            <div className={styles.form_head}>
                                <input type="text" name="name" disabled value={values.name} onChange={onInputHandler} />
                            </div>
                            <div className={styles.form_main}>
                                <BsMailbox2 /><input type="email" name="email" disabled value={values.email} onChange={onInputHandler} />
                                <CgProfile /><input type="url" name="picture" value={values.picture} onChange={onInputHandler} />
                            </div>
                            <button type="submit" className={styles.edit_button}>Edit</button>
                        </form>
                    </div>
                </div>
            </article>
        </section>
    );
}