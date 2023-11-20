import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";


export default function Nav({onSearch, logout}) {
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <NavLink to={'/about'}>
                <button>About</button>
            </NavLink>
            <NavLink to={'/home'}>
                <button>Home</button>
            </NavLink>
            <button onClick={logout}>Logout ❌</button>
        </div>
    )
}