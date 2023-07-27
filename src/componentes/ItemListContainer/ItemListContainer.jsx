import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useProductos } from "../../hooks/useProductos"



const ItemListContainer = () => {

    const {productos, loading} = useProductos()

    console.log(loading, productos)
    
    return(
        <div className="list__container">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    )
}

export default ItemListContainer