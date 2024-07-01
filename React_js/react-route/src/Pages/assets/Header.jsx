import { Link, NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <ul>
                <li><NavLink to="/"> Home </NavLink></li>
                <li><NavLink to="/about"> About </NavLink></li>
                <li><NavLink to="/service"> Service</NavLink></li>
                <li><NavLink to="/contact"> Contact </NavLink></li>
                <li><Link to="/github"> Github </Link></li>
            </ul>
        </>
    )
}