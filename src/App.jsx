import Header from "./componentes/Header/Header"
import "./styles/styles.scss"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css'
import Nosotros from "./componentes/Nosotros/Nosotros";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contacto from "./componentes/Contacto/Contacto";


function App() {

  return(
    
      <BrowserRouter>
          
          <Header />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/nosotros" element={<Nosotros />} />
            
            
        </Routes>
      </BrowserRouter>
    
  )
}

export default App