import "./ItemListContainer.css"
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])


    useEffect(() => {
        pedirDatos()
            .then((res) => {
                setProductos(res)
            })
            .catch((error) => {
                console.log(error)
        })
    }, [])

    
    
    return(
        <div className="list__container">
            <ItemList items={productos}/>
        </div>
    )
}

export default ItemListContainer