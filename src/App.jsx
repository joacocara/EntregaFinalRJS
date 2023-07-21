import Header from "./componentes/Header/Header"
import "./App.css"
import "./styles/styles.scss"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(
    <div>
      <Header />
      <ItemListContainer mensaje="EL mejor procesador para el mejor" />
    </div>
  )
}

export default App