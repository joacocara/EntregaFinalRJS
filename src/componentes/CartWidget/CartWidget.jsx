import { useContext } from "react"
import { FaCartShopping } from "react-icons/fa6"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import "./CartWidget.scss"

const CartWidget = () => {
    const { cart, totalCantidad } = useContext(CartContext)

    return(
        <Link to="/cart" className={`cart-widget ${cart.length > 0 ? 'cart-widget-active' : ''}`}>
            <FaCartShopping />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget