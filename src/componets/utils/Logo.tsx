import logo from "./logo.webp"
import style from "./utils.module.css"
const Logo=()=>{
    return (
        <div className={style.logo}>
            <img className={style.logo__img} src={logo} alt="Darlington's profile image"/>
            <div className={style.logo__div}>
                <p className={style.logo__name}>Darlington</p>
                <p className={style.logo__email}>o.darlington@outlook.com</p>
            </div>
        </div>
    )
}

export default Logo;