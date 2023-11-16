import { useState } from "react";
import validation from "./validation";



const Form = ({login}) => {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

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
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" value={userData.email} onChange={handleChange} />
            {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
            <label htmlFor="password">Password: </label>
            <input type="text" name="password" value={userData.password} onChange={handleChange} />
            {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
            <button>Submit</button>
        </form>
    )
}


export default Form;