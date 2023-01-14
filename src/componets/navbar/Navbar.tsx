import Logo from "../utils/Logo";
import style from "./Navbar.module.css";

const Navbar=()=>{
    return (<nav className={style.nav}>
        <Logo/>
        <ul className={style.nav__ul}>
            <li className={style.nav__li}>Home</li>
            <li className={style.nav__li}>Porfolio</li>
            <li className={style.nav__li}>About me</li>
        </ul>

        <a className={style.nav__a}>Contact Me</a>
    </nav>)
}

export default Navbar;