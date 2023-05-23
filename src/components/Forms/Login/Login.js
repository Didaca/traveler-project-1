import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useContext } from "react";
import { AuthorContext } from "../../../contexts/AuthorContext";
import { useMatrix } from "../../../hooks/useMatrix";

export const Login = () => {

    const {onLogin} = useContext(AuthorContext);

    const {values, onInputHandler} = useMatrix({
        email: '',
        password: ''
    });

    const onSubmitLog = (e) => {
        e.preventDefault()
        const obj = Object.fromEntries(new FormData(e.target));
        onLogin(obj);
    };
    

    return (
        <>
            <header className={styles.login_header}>
                <div className={styles.box}>
                    <form className={styles.form} onSubmit={onSubmitLog}>
                        <h2>Log In</h2>
                        <div className={styles.inputbox}>
                            <input type="email" name="email" required="required" value={values.email} onChange={onInputHandler}/>
                            <label htmlFor="email">Your Email</label>
                            <i></i>
                        </div>
                        <div className={styles.inputbox}>
                            <input type="password" name="password" required="required" value={values.password} onChange={onInputHandler}/>
                            <label htmlFor="pass">Password</label>
                            <i></i>
                        </div>
                        <div className={styles.links}>
                            <Link to="#">Forgot Password</Link>
                            <Link to="/registration">Sign up</Link>
                        </div>
                        <button>Login</button>
                    </form>
                </div>
            </header>
        </>
    );
}