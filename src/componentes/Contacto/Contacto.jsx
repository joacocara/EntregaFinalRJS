import "./Contacto.scss"


const Contacto = () => {

    return(
        <div className="body">
            <div className="container my-5">
                <h1 className="enviotit">¿Cómo realizamos los envios?</h1>
                <img className="truck" src="/public/envio.png" alt="" />

                <p className="txtenvio">Utilizamos distintas empresas de transporte de cargas, ya que le damos al cliente la opción de que tan rápido quiere que llegue el producto, o si no es de urgencia, se le abaraten los costos.
            Confiamos en las empresas, ya que le entregamos productos diariamente. </p>
            </div>
        </div>
    )
}

export default Contacto
