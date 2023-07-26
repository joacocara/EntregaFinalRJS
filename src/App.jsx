import Header from "./componentes/Header/Header"
import "./styles/styles.scss"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return(
    <div>
      <Header />

        <ItemListContainer />
    </div>
  )
}

export default App