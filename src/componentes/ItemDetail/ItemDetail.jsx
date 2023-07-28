import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"



const ItemDetail = ({id, nombre, img, descripcion, category, precio, stock}) => {
    const [ cantidad, setCantidad ] = useState(1)
    

    const handleAgregar = () => {
        const item = {
            id,
            nombre, 
            descripcion, 
            precio, 
            img, 
            stock, 
            category, 
            cantidad
        }
        console.log(item)
    }


    return(
        <div className="container my-5">
            <h2>{nombre}</h2>

            <img src={img} alt={nombre} />
            <p>{descripcion}</p>

            <h4>Precio: ${precio}</h4>
            <br />
            <small>categoría: {category}</small>

            <ItemCount 
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />
        </div>
    )
}

export default ItemDetail