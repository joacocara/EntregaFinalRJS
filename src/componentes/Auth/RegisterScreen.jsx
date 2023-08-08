import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"
import "./LoginScreen.scss"

const RegisterScreen = () => {
    const {register} = useContext(AuthContext)

   const [values, setValues] = useState({
    email: "",
    password: ""
   })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
       })
   }

    const handleSubmit = (e) => {
        e.preventDefault()
        register(values)
    }


    return(
        <div className="auth-container">
            <div className="auth-modal">
                <h2>Registrarse</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <h6 className="titu">Escribe un correo</h6>
                    <input 
                    value={values.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    className="form-control my-4"
                    name="email"
                     />
                     <h6 className="titu">Escribe una contraseña</h6>
                     <input 
                    value={values.password}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="contraseña"
                    className="form-control my-4"
                    name="password"
                     />

                     <button className="btn btn-primary" type="submit">Registrarse</button>
                     <Link className="register-boton" style={{marginLeft: "200px"}} to="/login">Ya estoy registrado</Link>
                </form>

            </div>
        </div>
    )
}

export default RegisterScreen