import React, { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc, query, where, getDocs, writeBatch } from "firebase/firestore"
import { db } from "../../firebase/config"
import "./Checkout.scss"

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useCartContext()

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: '',
        cbu: ''
    })
    const [errorMensaje, setErrorMensaje] = useState('')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }))
    }

    const validateForm = () => {
        if (values.nombre.trim() === '') {
            setErrorMensaje("El nombre es obligatorio")
            return false
        }
        if (values.direccion.trim() === '') {
            setErrorMensaje("La dirección es obligatoria")
            return false
        }
        if (values.email.trim() === '') {
            setErrorMensaje("El email es obligatorio")
            return false
        }
        if (values.cbu.trim() === '') {
            setErrorMensaje("El CBU/CVU/Alias es obligatoria para saber de donde proviene el pago")
            return false
        }
        return true
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")

        const q = query(productosRef, where("id", "in", cart.map((item) => item.id)))
        const productos = await getDocs(q)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find((prod) => prod.id === doc.id)
            const stock = doc.data().stock

            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad,
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    const orden = {
                        cliente: values,
                        items: cart,
                        total: totalCompra(),
                        fecha: new Date(),
                    }

                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            vaciarCarrito()
                        })
                        .catch((err) => console.log(err))
                })
        } else {
            alert("Hay productos sin stock")
        }
    }

    if (orderId) {
        return (
            <div className="container my-5 body-2">
                <div className="bg-danger p-4 rounded">
                    <h2>Te enviaremos toda la información a tu correo</h2>
                    <hr />
                    <p>
                        Tu numero de compra es: <strong>{orderId}</strong>
                    </p>
                    <Link to="/" className="btn btn-primary">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <div className="checkout-container body">
            <div className="checkout-form">
                <h2>¡Ingresa los datos, tu compra te espera!</h2>
                <form onSubmit={handleSubmit}>
                    <p>ingresa tu nombre completo</p>
                    <input
                        value={values.nombre}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Nombre"
                        className="form-control"
                        name="nombre"
                        required
                    />
                    <p>Ingresa la direccion del lugar a donde enviaremos tu pedido</p>
                    <input
                        value={values.direccion}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Dirección"
                        className="form-control"
                        name="direccion"
                        required
                    />
                    <p>Ingresa un email para que recibas la informacion</p>
                    <input
                        value={values.email}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                        className="form-control"
                        name="email"
                        required
                    />
                    <p>Ingresa tu CBU/CVU/ALIAS para comprobación</p>
                    <input
                        value={values.cbu}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="CBU/CVU/ALIAS"
                        className="form-control"
                        name="cbu"
                        required
                    />
                    <button className="btn btn-primary" type="submit">
                        Pagar
                    </button>
                </form>
                {errorMensaje && <p className="error-mensaje">{errorMensaje}</p>}
            </div>
        </div>
    )
}

export default Checkout
