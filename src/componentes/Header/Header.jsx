import "./Header.scss"
import { Link } from "react-router-dom"
import Buscador from "../../ejemplos/Buscador"
import CartWidget from "../CartWidget/CartWidget"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Header = ({variant = false}) => {
const { user, logout} = useContext(AuthContext)
    
    return(
        <header className={variant ? "header header-v" : "header"}>
            <div className="header__container">
                <img src="/public/vite.svg" alt="" />

                <nav className="header__nav">
                    <Link className="header__link" to="/">Inicio</Link>
                    <Link className="header__link" to="/productos/ryzen">Ryzen</Link>
                    <Link className="header__link" to="/productos/intel">Intel</Link>
                    <Link className="header__link" to="/contacto">Contacto</Link>
                    <Link className="header__link" to="/nosotros">Nosotros</Link>
                </nav>
                <CartWidget />
            </div>
            <Buscador />
            <p>Bienvenido: {user.email}</p>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
        </header>
    )
}

export default Header