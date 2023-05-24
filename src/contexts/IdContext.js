import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { CreateTestimonial, DeleteTestimonial, EditTestimonial, GetTestimonials } from "../services/TestimonialService";
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
        author
    } = useContext(AuthorContext);


   


    useEffect(() => {
        GetTestimonials()
            .then(data => data === null ? setHaveTestim(false) : setTestimObj(data));

    }, [testimonial]);


    const onCreateTestimonial = async ({text}) => {
        try {

            const newTestimonial = await CreateTestimonial({
                text,
                userId: author.uid,
                userName: author.displayName,
                userURL: author.photoURL
            });

            setTestimonial(newTestimonial);
            navigate('/packages');

        } catch (error) {

            alert(error);

        }
    };

    const onEditTestimonial = async (id, {text}) => {
        try {

            const newTestimonial = await EditTestimonial(id, {
                text
            });

            setTestimonial(newTestimonial);
            navigate('/packages');

        } catch (error) {

            alert(error);

        }
    };


    const onDeleteTestimonial = (id) => {
        try {

            DeleteTestimonial(id);

            setTestimonial({});
            navigate('/packages');

        } catch (error) {

            alert(error);

        }
    };


    const allTestimValuesProvider = {
        onCreateTestimonial,
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
