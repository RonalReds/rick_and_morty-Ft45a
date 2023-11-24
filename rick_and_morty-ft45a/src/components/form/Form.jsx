import { useState } from "react";
import validation from "../../util/validation";




const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: 'Ingrese su usuario',
        password: 'Ingrese su password'
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name] : value
        })

        setErrors(validation({
            ...userData,
            [name] : value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
        }
     
    return (
        <form onSubmit={handleSubmit}>
            <label>Email: </label>
            <input
                id="email"
                type="text"
                name="email"
                value={userData.email}
                placeholder="Ingre su correo..."
                onChange={handleChange} />
            {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
            <label>Password: </label>
            <input
                id="password"
                type="text"
                name="password"
                value={userData.password}
                placeholder="Ingrese su contrasena..."
                onChange={handleChange} />
            {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
            <button
                type="submit"
                disabled={errors.email || errors.password }
            >Submit</button>
        </form>
    )
}


export default Form;