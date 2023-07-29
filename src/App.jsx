import Header from "./componentes/Header/Header"
import "./styles/styles.scss"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import Nosotros from "./componentes/Nosotros/Nosotros"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import Contacto from "./componentes/Contacto/Contacto"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import Cart from "./componentes/Cart/Cart"
//import Error404 from "./componentes/Error404/Error404"



function App() {
  

  return(
    <CartProvider>
      <BrowserRouter>
          
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

      </BrowserRouter>
    </CartProvider>
    
  )
}

export default App