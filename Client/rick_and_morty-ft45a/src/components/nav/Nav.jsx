import SearchBar from "../searchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";
import { MdOutlineFavorite } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";


export default function Nav({onSearch, logout}) {
    return (
        <div>
            <div className={style.contenedor}>
            <NavLink to={'/favorites'}>
            <button><MdOutlineFavorite size='1.5rem'/></button>
            </NavLink>
            <NavLink to={'/home'} className={style.contenedorBtn1}>
            <button><IoHome size='1.5rem'/></button>
            </NavLink>
            <SearchBar onSearch={onSearch} />
            <NavLink to={'/about'} className={style.contenedorBtn2}>
            <button><GrContactInfo size='1.5rem'/></button>
            </NavLink>
            <button onClick={logout}><LuLogOut size='1.5rem'/></button>
            </div>
        </div>
        
    )
}