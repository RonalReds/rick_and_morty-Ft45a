import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";


export default function Nav({onSearch, logout}) {
    return (
        <div className={style.contenedor}>
            <SearchBar onSearch={onSearch} />
            <NavLink to={'/favorites'} className={style.link}>
                <button className={style.Btn3}>Favorites</button>
            </NavLink>
            <NavLink to={'/about'}>
                <button className={style.Btn1}>About</button>
            </NavLink>
            <NavLink to={'/home'} className={style.link}>
                <button className={style.Btn2}>Home</button>
            </NavLink>
            <button onClick={logout} className={style.Btn4}>Logout ❌</button>
        </div>
    )
}