import { useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link, Navigate } from "react-router-dom"
import { collection, addDoc, doc, getDoc, where, updateDoc, writeBatch, query, documentId, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"
import "./Checkout.scss"

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

    const handleSubmit = async (e) => {
        e.preventDefault()

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

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        

        const q = query(productosRef, where(documentId(), "in", cart.map(item => item.id)))
        const productos = await getDocs(q)

        const outOfStock = []

      productos.docs.forEach((doc) => {
        const item = cart.find((prod) => prod.id === doc.id)
        const stock = doc.data().stock

        if (stock >= item.cantidad) {
            batch.update(doc.ref, {
                stock: stock - item.cantidad
            })
        } else {
            outOfStock.push(item)
        }
      })

        if (outOfStock.length === 0){
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden)
                        .then((doc) => {
                            setOrderId(doc.id)
                            vaciarCarrito()
                    })
                    .catch(err => console.log(err))
                })
      } else {
            alert("Hay productos sin stock")
      }
        
     
    }
    
    if (orderId) {
        return (
          <div className="container my-5 body-2">
            <div className="bg-danger p-4 rounded">
              <h2>Compra exitosa</h2>
              <hr />
              <p>Tu numero de compra es: <strong>{orderId}</strong></p>
              <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
          </div>
        )
      }
      

    if(cart.length === 0) {
        return <Navigate to="/"/>
    }
    
    return (
        
        <div className="checkout-container body">
          <div className="checkout-form">
            <h2>¡Ingresa los datos, tu compra te espera!</h2>
            <form onSubmit={handleSubmit}>
              <input
                value={values.nombre}
                onChange={handleInputChange}
                type="text"
                placeholder="Nombre"
                className="form-control"
                name="nombre"
                required
              />
              <input
                value={values.direccion}
                onChange={handleInputChange}
                type="text"
                placeholder="Dirección"
                className="form-control"
                name="direccion"
                required
              />
              <input
                value={values.email}
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                className="form-control"
                name="email"
                required
              />
              <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )
}

export default Checkout
