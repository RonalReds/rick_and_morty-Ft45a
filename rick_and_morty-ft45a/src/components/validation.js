
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validation = (userData) => {
    const errors = {};

    if (!regexEmail.test(userData.email)) errors.email = "Email no valido";
    if (!userData.email) errors.email = "El campo no puede estar vacio";
    if (userData.email.length > 35) errors.name = "El nombre de usuario no puede tener más de 35 caracteres";
    if (!/.*\d+.*/.test(userData.password)) errors.password = "Debe tener al menos un numero";
    if (userData.password.length < 6 || userData.password.length > 10) errors.password = "Debe tener entre 6 y 10 caracteres";

    return errors;
}


export default validation;