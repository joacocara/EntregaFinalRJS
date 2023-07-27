import { useProductos } from "../../hooks/useProductos"



const Nosotros = () => {
    const { productos} = useProductos()

    console.log(productos)

    return(
        <div className="container my-5">
            <h2>Nosotros</h2>
            <hr />

            {
                JSON.stringify(productos)
            }
        </div>
    )
}

export default Nosotros