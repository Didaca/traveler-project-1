import { createContext } from "react";
import { useState } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import { useLocalStorage } from '../hooks/useLocalStorage';
import { LoginU, RegU, LogOut, EditUser } from "../services/UserService";


export const AuthorContext = createContext();


export const AuthorProvider = ({
    children
}) => {

    const navigate = useNavigate();

    const [author, setAuthor] = useLocalStorage('user', {});
    const [show, setShow] = useState(false);
  
    
    
    const onShowHandler = () => {
        setShow(!show);
    }

    const changeAuthor = () => {
        setAuthor({});
    }

    const onLogin = async (obj) => {
        try {

            const result = await LoginU(obj);

            if (result.errorCode) {
                alert(result.errorMessage);
                return <Navigate to="/login" />;
            }

            setAuthor(result);
            navigate('/destinations');

        } catch (error) {

            alert(error);

        }
    }

    const onRegister = async (obj) => {
        try {

            const result = await RegU(obj);
            setAuthor(result);
            navigate('/destinations');

        } catch (error) {

            alert(error);

        }
    }

    const onLogout = () => {
        LogOut();
        changeAuthor();

        navigate('/');
    }

    const onEdit = async (obj) => {
        try {

            const editedProfile = await EditUser(obj);

            setAuthor(editedProfile);
            navigate(`/profile/${editedProfile.uid}`);
            alert("Your profile has edit!");

        } catch (error) {

            alert(error);

        }
    }


    const allAuthorValuesProvider = {
        onLogin,
        onRegister,
        onLogout,
        onEdit,
        author,
        isLogged: author.uid ?true :false,
        onShowHandler,
        show
    }

    return (
        <>
            <AuthorContext.Provider value={allAuthorValuesProvider}>
                {children}
            </AuthorContext.Provider>
        </>
    );
}