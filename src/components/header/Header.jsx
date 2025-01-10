import { Link } from "react-router"

import style from "./Header.module.css"

function Header(){
    return(
        <header className={style.header}>
            <div className={style.logo}>
                <img src="" alt="Logo" />
            </div>
            <Link to="/" className={style.link}>Home</Link>
        </header>
    )
}

export default Header