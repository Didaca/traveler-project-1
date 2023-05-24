import { collection, doc, setDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "./database";




export const GetOneTestimonial = async (id) => {

    let testimonial = {};

    await getDoc(doc(db, "testimonials", `${id}`))
        .then((testim) => (testimonial = testim.data()))

    return testimonial;
}



export const GetTestimonials = async () => {

    let allTestimonials = [];

    const docRef = await getDocs(collection(db, "testimonials"));
    docRef.forEach(
        (d) => { allTestimonials.push(d.data()) });

    if (allTestimonials.length >= 1) {
        return allTestimonials;
    } else {
        return null;
    }

}


export const CreateTestimonial = async (data) => {

    let new_testimonial = {};
    const id = data.userId

    console.log(id)

    try {
        await setDoc(doc(db, "testimonials", `${id}`), data)
            .then((doc) => (new_testimonial = doc))

    } catch (e) {
        // console.error("Error adding document: ", e);
        alert(e.message);
    }

    return new_testimonial;
};


export const EditTestimonial = async (id, data) => {

    let edited_testim = {};

    try {
        await updateDoc(doc(db, "testimonials", `${id}`), data)

    } catch (error) {
        // console.log(error.message);
        alert(error.message);
    }

    return edited_testim;
};


export const DeleteTestimonial = async(id) => {
    
    await deleteDoc(doc(db, "testimonials", `${id}`))
}