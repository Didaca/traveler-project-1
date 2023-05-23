import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { AddTestimonial, DeleteTestimonial, EditTestimonial, GetTestimonials } from "../services/TestimonialService";
import { AuthorContext } from "./AuthorContext";



export const IdContext = createContext();


export const IdProvider = ({
    children
}) => {

    const navigate = useNavigate();

    const [testimonial, setTestimonial] = useState({});
    const [testim_obj, setTestimObj] = useState([]);
    const [haveTestim, setHaveTestim] = useState(true);


   

    const {
        userId,
        token,
        firstname,
        lastname,
        profession,
        picture
    } = useContext(AuthorContext);


   


    useEffect(() => {
        GetTestimonials()
            .then(data => data === null ? setHaveTestim(false) : setTestimObj(data));

    }, [testimonial]);


    const onAddTestimonial = async ({text}) => {
        try {

            const newTestimonial = await AddTestimonial(token, {
                text,
                userId,
                firstname,
                lastname,
                profession,
                picture
            });

            setTestimonial(newTestimonial);
            navigate('/packages');

        } catch (error) {

            alert(error);

        }
    };

    const onEditTestimonial = async (testimID, {text}) => {
        try {

            const newTestimonial = await EditTestimonial(testimID, token, {
                text,
                userId,
                firstname,
                lastname,
                profession,
                picture
            });

            setTestimonial(newTestimonial);
            navigate('/packages');

        } catch (error) {

            alert(error);

        }
    };


    const onDeleteTestimonial = (testimID) => {
        try {

            DeleteTestimonial(testimID, token);

            setTestimonial({});
            navigate('/packages');

        } catch (error) {

            alert(error);

        }
    };


    const allTestimValuesProvider = {
        onAddTestimonial,
        onEditTestimonial,
        onDeleteTestimonial,
        testim_obj,
        haveTestim
    };

    return (
        <>
            <IdContext.Provider value={allTestimValuesProvider}>
                {children}
            </IdContext.Provider>
        </>
    );
}
