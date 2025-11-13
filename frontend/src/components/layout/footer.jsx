import { Link } from "react-router"

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white text-center">
                <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
                    <p>© 2025 Materiales Leonel — Todos los derechos reservados</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link>Facebook</Link>
                        {/* <Link>Etc</Link> */}
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer