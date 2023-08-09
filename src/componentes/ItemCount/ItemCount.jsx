
const ItemCount = ({ max, cantidad, setCantidad, handleAgregar }) => {
    const buttonClass = cantidad === 1 ? "btn-outline-danger" : "btn-outline-primary";
    const addButtonClass = cantidad === max ? "btn-outline-danger" : "btn-outline-primary";

    const handleSumar = () => {
        cantidad < max && setCantidad(cantidad + 1);
    };

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1);
    };

    return (
        <div>
            <button onClick={handleRestar} className={`btn ${buttonClass}`} disabled={cantidad === 1}>-</button>
            <span className="mx-3">{cantidad}</span>
            <button onClick={handleSumar} className={`btn ${buttonClass}`} disabled={cantidad === max}>+</button>
            <br />
            <button onClick={handleAgregar} className={`btn btn-success my-2 ${addButtonClass}`}>Agregar al carrito</button>
        </div>
    );
};

export default ItemCount;
