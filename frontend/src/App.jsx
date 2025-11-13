import { BrowserRouter, Route, Routes } from "react-router-dom"
// importamos todas las paginas
import MainPage from "./pages/mainPage"
import SucursalPage from "./pages/sucursalPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* le asignamos una ruta a cada pagina */}
          <Route path="/" element={<MainPage/>}/>
          <Route path="/sucursal" element={<SucursalPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App