import { Link } from "react-router-dom"
import "./ItemCard.scss"


const ItemCard = ({id, nombre, img, descripcion, stock, precio}) => {

    return(
       
            <div className="col-4 m-5 articulos" >
                <h4  style={{color: "blue", fontSize: "30px", textAlign: "center", textDecoration: "underline" }}>{nombre}</h4>
                <img src={img} alt={nombre} />
                <p>{descripcion}</p>
            { stock <= 6 && <p style={{fontWeight: 700, color: 'red'}}>Quedan solo {stock} unidades!</p>}
                <p>Precio: ${precio}</p>
                <Link className="btn btn-primary"  style={{ width: "200px" }} to={`/detail/${id}`}>Ver más</Link>
            </div>
    )
}

export default ItemCard