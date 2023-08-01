import Header from "../componentes/Header/Header"
import ItemListContainer from "../componentes/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import Nosotros from "../componentes/Nosotros/Nosotros"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Contacto from "../componentes/Contacto/Contacto"
import ItemDetailContainer from "../componentes/ItemDetailContainer/ItemDetailContainer"
import Cart from "../componentes/Cart/Cart"
import LoginScreen from "../componentes/Auth/LoginScreen"
import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import RegisterScreen from "../componentes/Auth/RegisterScreen"


const AppRouter = () => {
    const { user } = useContext(AuthContext)
    return(
        <BrowserRouter>
          {
            user.logged
              ? <>
                  <Header />

              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/productos/:categoryId" element={<ItemListContainer />} />
                <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Navigate to={"/"} /> } />  
              </Routes>
              </>
              : <Routes>
              <Route path="/login" element={<LoginScreen />}/>
              <Route path="/register" element={<RegisterScreen />}/>
              <Route path="*" element={<Navigate to="/login" />} />
           </Routes>
          }

           
           
        </BrowserRouter>
    )

}

export default AppRouter