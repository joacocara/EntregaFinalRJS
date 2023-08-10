import { useContext, useState } from "react"
import "./LoginScreen.scss"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"


const LoginScreen = () => {
    const {login, googleLogin} = useContext(AuthContext)

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
        login(values)
    }


    return(
        <div className="auth-container logeador">
            <div className="auth-modal">
                <h2>Log in</h2>
                <hr />

                <form onSubmit={handleSubmit}>
                    <p>ingresa tu correo</p>
                    <input 
                    value={values.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    className="form-control my-3"
                    name="email"
                     />
                     <p>ingresa tu contraseña</p>
                     <input 
                    value={values.password}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="contraseña"
                    className="form-control my-3"
                    name="password"
                     />

                     <button className="btn btn-primary" type="submit">Iniciar sesión</button>
                     <Link className="register-boton" style={{marginLeft: "200px"}} to="/register">Registrarme</Link>
                </form>

                <button style={{marginTop: "20px", backgroundColor: "red", color: "white", borderRadius: "10px", height: "40px", width: "150px"}} onClick={googleLogin}>Iniciar con Google</button>

            </div>
        </div>
    )
}

export default LoginScreen