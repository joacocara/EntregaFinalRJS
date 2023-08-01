import "./styles/styles.scss"
import { CartProvider } from "./context/CartContext"
import {  AuthContextProvider } from "./context/AuthContext"
import AppRouter from "./router/AppRouter"
//import Error404 from "./componentes/Error404/Error404"



function App() {

  return(
    <AuthContextProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthContextProvider>
  )
}

export default App