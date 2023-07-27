import Header from "./componentes/Header/Header"
import "./styles/styles.scss"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Nosotros from "./componentes/Nosotros/Nosotros";

function App() {

  return(
    <div>
      <Header />

        <ItemListContainer />
        <Nosotros />
    </div>
  )
}

export default App