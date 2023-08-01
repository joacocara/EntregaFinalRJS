import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { Link } from "react-router-dom"


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
                    <input 
                    value={values.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    className="form-control my-2"
                    name="email"
                     />
                     <input 
                    value={values.password}
                    onChange={handleInputChange}
                    type="password"
                    placeholder="contraseña"
                    className="form-control my-2"
                    name="password"
                     />

                     <button className="btn btn-primary" type="submit">Registrarse</button>
                     <Link to="/login">Ya estoy registrado</Link>
                </form>

            </div>
        </div>
    )
}

export default RegisterScreen