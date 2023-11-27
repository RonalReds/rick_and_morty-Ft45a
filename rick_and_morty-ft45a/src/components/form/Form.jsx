import { useState } from "react";
import validation from "../../util/validation";
import style from "../form/Form.module.css";
import imageForm from "./rick-morty.jpg";


const Form = ({login}) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        /* email: 'Ingrese su usuario',
        password: 'Ingrese su password' */
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
        <form onSubmit={handleSubmit} className={style.contenedor}>
            <img src={imageForm} className={style.formImag} />
            <label className={style.formLabel}>Email: </label>
            <input
                id="email"
                type="text"
                name="email"
                value={userData.email}
                placeholder="Ingre su correo..."
                onChange={handleChange}
                className={style.formInput}/>
            {errors.email && <p className={style.msjP}>{errors.email}</p>}
            <label className={style.formLabel}>Password: </label>
            <input
                id="password"
                type="text"
                name="password"
                value={userData.password}
                placeholder="Ingrese su contrasena..."
                onChange={handleChange}
                className={style.formInput}/>
            {errors.password && <p className={style.msjP}>{errors.password}</p>}
            <button
                type="submit"
                disabled={errors.email || errors.password}
                className={style.formBtn}
            >Submit</button>
        </form>
    )
}


export default Form;