import { useContext } from "react"
import { FaCartShopping } from "react-icons/fa6"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { totalCantidad } = useContext(CartContext)

    return(
        <Link className="fs-5" style={{color: "white"}}>
            <FaCartShopping />
            <span>{totalCantidad()}</span>
        </Link>
    )
}

export default CartWidget