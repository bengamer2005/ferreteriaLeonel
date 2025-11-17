import { Link } from "react-router"
// hook
import { useProductosPage } from "../hooks/useProductosPage"
// componentes
import Layout from "../components/layout"
import ProductCard from "../components/products"
import { Loader } from "../components/loader"
import ErrorToast from "../components/alert"

const ProductosPage = () => {
    const { type, materiales, ferreteria, data, isLoading, isError } = useProductosPage()
    console.log(data.allProductType)

    return (
        <>
            <Layout>
                <div className="relative flex flex-row justify-around">
                    <Link to={"/productos?type=materiales"} className={`w-full p-2 text-center border-black ${materiales ? ("bg-orange-400") : ("bg-orange-50")}`}>
                        <p className={`${materiales ? ("text-white ") : ("text-orange-300")}`}>Materiales</p>
                    </Link>

                    <Link to={"/productos?type=ferreteria"} className={`w-full p-2 text-center border-black ${ferreteria ? ("bg-orange-400") : ("bg-orange-50")}`}>
                        <p className={`${ferreteria ? ("text-white ") : ("text-orange-300")}`}>Ferreteria</p>
                    </Link>
                </div>

                {isError && (
                    <ErrorToast error={`Ocurrio un error al tratar de cargar los productos de ${type}`}/>
                )}
                
                <div className="flex flex-col sm:flex-row justify-evenly items-center flex-1">
                    {isLoading && <>
                    <Loader></Loader>
                    <Loader></Loader>
                    <Loader></Loader>
                    <Loader></Loader>
                    </>}
                </div>

                <div className="flex justify-center flex-wrap">
                    {!isLoading && !isError && data.allProductType?.map((p) => (
                        <ProductCard
                        key={p.id}
                        nombre={p.nombre}
                        descripcion={p.descripcion}
                        precio={p.precio}
                        />
                    ))}
                </div>
            </Layout>
        </>
    )
}

export default ProductosPage