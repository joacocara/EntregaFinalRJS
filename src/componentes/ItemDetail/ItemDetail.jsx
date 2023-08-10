import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.scss"

const ItemDetail = ({ id, nombre, img, descripcion, precio, stock }) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    const navigate = useNavigate()
    const isItemInCart = isInCart(id)

    const handleAgregar = () => {
        const item = { id, nombre, descripcion, precio, img, stock, cantidad }
        agregarAlCarrito(item)
    }

    const handleVolver = () => {
        navigate(-1)
    }

    const purchaseButton = isItemInCart ? (
        <Link className="btn btn-success" to="/cart">
            Terminar mi compra
        </Link>
    ) : (
        <ItemCount
            max={stock}
            cantidad={cantidad}
            setCantidad={setCantidad}
            handleAgregar={handleAgregar}
        />
    )

    return (
        <div className="container my-5 detail-box">
            <h2 className="name">{nombre}</h2>
            <img src={img} alt={nombre} />
            <p>{descripcion}</p>
            <h4>Precio: ${precio}</h4>
            <br />
            {purchaseButton}
            <hr />
            <button onClick={handleVolver} className="btn btn-primary">
                Volver
            </button>
        </div>
    )
}

export default ItemDetail
