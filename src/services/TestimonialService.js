import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./database";




export const GetOneTestimonial = async (testimonial_id) => {
    const result = await getDocs(collection(db, "testimonials"));
    result.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
}



export const GetTestimonials = async () => {
    const result = await getDocs(collection(db, "testimonials"));

    if (result) { 
        return result;
    } else {
        return null;
    } 

}


export const AddTestimonial = async (data) => {

    let new_testimonial = {};

    try {
        const docRef = await addDoc(collection(db, "testimonials"), {...data});
        console.log("Document written with ID: ", docRef.id);
        new_testimonial = docRef;

    } catch (e) {
        console.error("Error adding document: ", e);
        alert(e);
    }

    return new_testimonial;
}


export const EditTestimonial = async (testimonial_id, token, data) => {

    // const response = await fetch(`${baseUrl}/${testimonial_id}`, {
    //     method: 'PUT',
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-Authorization': `${token}`
    //     },
    //     body: JSON.stringify(data)
    // });

    // const result = await response.json();

    // return result;
}


export const DeleteTestimonial = (testimonial_id, token) => {

    // fetch(`${baseUrl}/${testimonial_id}`, {
    //     method: 'DELETE',
    //     headers: {
    //         'content-type': 'application/json',
    //         'X-Authorization': `${token}`
    //     }
    // });

    // return;
}