
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = new RegExp("[0-9]");

const validation = (userData) => {
    const errors = {};

    if (!userData.email) errors.email = "El campo no puede estar vacio";
    else {
        if (!regexEmail.test(userData.email)) errors.email = "Email no valido";
        if (userData.email.length > 35) errors.name = "El nombre de usuario no puede tener más de 35 caracteres";
    }
    if (!userData.password.length) errors.password = 'Ingrese sus password';
        if (!regexPassword.test(userData.password)) errors.password = "Debe tener al menos un numero";
        if (userData.password.length < 6) errors.password = "Debe tener al menos 6 caracteres";
        if(userData.password.length > 9) errors.password = 'Maximos 10 caracteres'

    return errors;
}


export default validation;