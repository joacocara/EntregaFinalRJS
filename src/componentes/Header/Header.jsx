import "./Header.scss"
import { Link } from "react-router-dom"
import Buscador from "../../ejemplos/Buscador"
import CartWidget from "../CartWidget/CartWidget"

const Header = ({variant = false}) => {

    
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
        </header>
    )
}

export default Header