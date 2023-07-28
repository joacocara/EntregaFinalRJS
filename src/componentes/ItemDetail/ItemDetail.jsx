


const ItemDetail = ({id, nombre, img, descripcion, category, precio, stock}) => {

    return(
        <div className="container my-5">
            <h2>{nombre}</h2>

            <img src={img} alt={nombre} />
            <p>{descripcion}</p>

            <h4>Precio: ${precio}</h4>
            <br />
            <small>categoría: {category}</small>
        </div>
    )
}

export default ItemDetail