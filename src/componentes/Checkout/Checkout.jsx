import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito} = useCartContext()

    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })
    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //validacion
        if(values.nombre.length === 0) {
            alert("El nombre es obligatorio")
            return
        }
        if(values.direccion.length === 0) {
            alert("La dirección es obligatoria")
            return
        }
        if(values.nombre.length === 0) {
            alert("El email es obligatorio")
            return
        }

        const orden = {
            cliente: values,
            items: cart,
            total: totalCompra(),
            fecha: new Date()
        }
        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                vaciarCarrito()
            })
            .catch(err => console.log(err))
    }
    if (orderId) {
        return(
            <div className="container my-5">
                <h2>Compra exitosa</h2>
                <hr />
                <p>Tu numero de compra es: <strong>{orderId}</strong></p>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        )
    }

    if(cart.length === 0) {
        return <Navigate to="/"/>
    }
    
    return(
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input 
                    value={values.nombre}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Nombre"
                    className="form-control my-2"
                    name="nombre" 
                    required
                />
                <input 
                    value={values.direccion}
                    onChange={handleInputChange}
                    type="text" 
                    placeholder="Dirección"
                    className="form-control my-2"
                    name="direccion"
                    required 
                />
                <input 
                    value={values.email}
                    onChange={handleInputChange}
                    type="email" 
                    placeholder="Email"
                    className="form-control my-2" 
                    name="email"
                    required
                />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout