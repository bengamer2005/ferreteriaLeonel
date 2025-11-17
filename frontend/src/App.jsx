import { BrowserRouter, Route, Routes } from "react-router-dom"
// importamos todas las paginas
import MainPage from "./pages/mainPage"
import SucursalPage from "./pages/sucursalPage"
import ProductosPage from "./pages/productosPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* le asignamos una ruta a cada pagina */}
          <Route path="/" element={<MainPage/>}/>
          <Route path="/sucursal" element={<SucursalPage/>}/>
          <Route path="/productos" element={<ProductosPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App