import { useState } from "react"
import RegisterValidation from "../validation/RegisterValidation";


export const useMatrix = (data) => {

    const [values, setValues] = useState(data);
    const [hasError_name, setHasError_name] = useState(false);
    const [hasError_pass, setHasError_pass] = useState(false);



    const onInputHandler = (e) => {
        const { errN, errP, name, pass, email, pic } = RegisterValidation(e);


        if (name && !errN) {
            setValues(state => ({ ...state, [e.target.name]: e.target.value }));
            setHasError_name(false);

        } else if (name && errN) {
            setValues(state => ({ ...state, [e.target.name]: e.target.value }));
            setHasError_name(errN);
        } else {
            setHasError_name(errN);
        };

        if (pass && !errP) {
            setValues(state => ({ ...state, [e.target.name]: e.target.value }));
            setHasError_pass(false);
    
        } else if (pass && errP) {
            setValues(state => ({ ...state, [e.target.name]: e.target.value }));
            setHasError_pass(errP);
        } else {
            setHasError_pass(errP);
        }

        if (email || pic) {
            setValues(state => ({ ...state, [e.target.name]: e.target.value }));
        }

    };

    return {
        values,
        onInputHandler,
        hasErrorN: hasError_name,
        hasErrorP: hasError_pass
    }
} 