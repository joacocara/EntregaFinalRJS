import ItemCard from "../ItemCard/ItemCard"
import { Link } from "react-router-dom"
import "./ItemList.scss"

const ItemList = ({items}) => {
    return(
        <div className="body">
            <h2 style={{color: "gold", fontSize: "50px", textAlign: "center" }}>Procesadores</h2>
            <br />
            <br />
                <div className="contenedor">
                    <Link className="header__link titulo_ir1" to="/productos/ryzen">Ryzen</Link>
                    <Link className="header__link titulo_ir2" to="/productos/intel">Intel</Link>
                </div>
            <div className="row">
                {
                    items.map((prod) => <ItemCard key={prod.id} {...prod} /> )

             }
            </div>
        </div>
    )
}

export default ItemList