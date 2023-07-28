import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useEffect, useState } from "react"
import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import { useSearchParams } from "react-router-dom"


const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()

    const search = searchParams.get("search")

    const {categoryId} = useParams()
    console.log(categoryId)


    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (!categoryId){
                    setProductos(res)
                } else {
                    setProductos( res.filter((item) => item.category === categoryId) )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    const listado = searchParams.get("search")
                        ? productos.filter(prod => prod.nombre.includes(search))
                        : productos
   
    return(
        <div className="list__container">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={listado}/>
            }
        </div>
    )
}

export default ItemListContainer