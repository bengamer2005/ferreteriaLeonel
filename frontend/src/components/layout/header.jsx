import { Link } from "react-router"
import { useState } from "react"
import logo from "../../img/materialesLeonelLogoSinFondo.jpg"

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <header className="flex items-center justify-between px-4 py-2 bg-white border-b">

                {/* logo */}
                <img className="h-14" src={logo} alt="Logo" />
                
                {/* boton movil */}
                <button className="sm:hidden text-xl font-bold" onClick={() => setOpen(!open)}>
                    ☰
                </button>

                {/* links */}
                <nav className="hidden sm:flex space-x-6 text-lg font-medium ml-auto pr-10">
                    <Link className="hover:text-slate-600 hover:underline hover:decoration-orange-500 hover:underline-offset-4" to="/">Inicio</Link>
                    <Link className="hover:text-slate-600 hover:underline hover:decoration-orange-500 hover:underline-offset-4" to="/">Productos</Link>
                    <Link className="hover:text-slate-600 hover:underline hover:decoration-orange-500 hover:underline-offset-4" to="/sucursal">Sucursal</Link>
                    <Link className="hover:text-slate-600 hover:underline hover:decoration-orange-500 hover:underline-offset-4" to="/">Contacto</Link>
                </nav>
            </header>

            {/* acordeon */}
            {open && (
                <nav className="sm:hidden flex flex-col bg-gray-100 py-2 space-y-2 text-lg px-4">
                    <Link onClick={() => setOpen(false)} to="/">Inicio</Link>
                    <Link onClick={() => setOpen(false)} to="/productos">Productos</Link>
                    <Link onClick={() => setOpen(false)} to="/sucursal">Sucursal</Link>
                    <Link onClick={() => setOpen(false)} to="/contacto">Contacto</Link>
                </nav>
            )}
        </>
    )
}

export default Header