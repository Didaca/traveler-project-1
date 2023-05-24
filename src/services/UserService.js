import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const LoginU = async ({
    email,
    password
}) => {
    
    let data = {};
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            data = user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            data = {errorCode, errorMessage};
        });
    return data;
}

export const LogOut = () => {

    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
    })
    .catch((error) => {
        // An error happened.
    });
}

export const RegU = async ({
    name,
    email,
    password,
    picture
}) => {

    let data = '';
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // Add user name and pictureURL
            updateProfile(auth.currentUser, {displayName: name, photoURL: picture})
            .then()
            .catch((error) => {alert(error.message)})

            data = user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            data = {errorCode, errorMessage};
        });
    return data;
}

export const EditUser = async({
    picture
}) => {

    const auth = getAuth();

    await updateProfile(auth.currentUser, {photoURL: picture})
    .then()
    .catch((error) => {
        alert(error.message);
    })

    return auth.currentUser;
}

