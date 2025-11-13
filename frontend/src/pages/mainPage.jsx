import { Link } from "react-router"
// componentes
import Layout from "../components/layout"
// img
import FerreteriaImg from "../img/FerreteriaImg.png"

const MainPage = () => {
    return (
        <>
            <Layout>
                <div className="bg-slate-100">
                    {/* presentacion principal */}
                    <div className="relative flex flex-col lg:flex-row justify-evenly items-center p-6 lg:h-[400px] gap-6">
                        <img className="w-full sm:h-72 md:h-80 lg:h-[100%] lg:w-auto object-cover rounded" src={FerreteriaImg} alt="FerreteriaMaterialesLeonel" />

                        <div className="text-gray-800 p-6 max-w-sm h-full flex flex-col">
                            <h2 className="text-xl font-bold sm:text-2xl">Materiales Leonel - Materiales para usted</h2>
                            <p className="text-sm mt-6">Aqui puedes encontrar todos los materiales necesarios para tu constuccion, y hacer ese sueño realidad.</p>

                            <Link to="/" className="bg-orange-400/50 hover:bg-orange-400/70 text-sm p-2 flex justify-center mt-8 lg:mt-auto rounded-md sm:w-3/4 sm:p-2 sm:text-lg mx-auto transition">Hacer cotizacion</Link>
                        </div>
                    </div>

                    {/* seccion de servicios */}
                    <section id="servicios" className="py-10 bg-white">
                        <div className="max-w-6xl mx-auto px-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-center mb-12">Nuestros Servicios</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                <Link to="/" className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
                                    <h4 className="text-lg sm:text-xl font-semibold mb-2">Ferreteria</h4>
                                    <p className="text-gray-600 text-sm sm:text-md">Catalogo de herramientas de diversas marcas.</p>
                                </Link>
                                <Link to="/" className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
                                    <h4 className="text-lg sm:text-xl font-semibold mb-2">Materiales</h4>
                                    <p className="text-gray-600 text-sm sm:text-md">Catalogo de materiales para la construccion.</p>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </Layout>
        </>
    )
}

export default MainPage