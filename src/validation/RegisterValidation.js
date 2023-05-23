const errorsV = {
    nameL: "The name must be at least 6 letters!",
    nameM: "The name must contain only letters!",
    passwordV: "Password must be at least six characters long!"
}




function RegisterValidation(element) {

    let errN = false;
    let errP = false;
    let name = false;
    let pass = false;
    let email = false;
    let pic = false;

    const elementName = element.target.name;
    const elementV = element.target.value;

    const lastEl = elementV[elementV.length - 1];

    if (elementName === "name") {

        if (elementV.length > 1 && elementV.length < 6) {

            errN = errorsV.nameL;
            name = true;

        } else {
            name = true;
        };

        if (/[^a-zA-Z]/.test(lastEl)) {

            errN = errorsV.nameM;
            name = false;

        }
    };

    if (elementName === "password") {
        if (elementV.length > 1 && elementV.length < 6) {
            errP = errorsV.passwordV;
            pass = true;
        } else {
            pass = true;
        }
    }

    if (elementName === "email") {
        email = true;
    }

    if (elementName === "picture") {
        pic = true;
    }

    return {
        errN,
        errP,
        name,
        pass,
        email,
        pic
    }
};

export default RegisterValidation;