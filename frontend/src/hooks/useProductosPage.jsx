import { useSearchParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { Notyf } from "notyf"
// servicios
import { AllProducts } from "../services/productosService"

const notyf = new Notyf({
    position: { x: "right", y: "bottom" },
    duration: 5000,
})

export const useProductosPage = () => {
    const [searchParams] = useSearchParams()
    // sacamos de los parametros de la url el tipo de producto
    const type = searchParams.get("type")

    const materiales = type === "materiales"
    const ferreteria = type === "ferreteria"

    const { data = [], refetch, isLoading, isError } = useQuery({
        queryKey: ["productosData", type],
        queryFn: () => AllProducts(type),
        enabled: !!type,
        onError: (error) => {
            notyf.error("Ocurrio un error.")
            console.error(error)
        }
    })

    return { type, materiales, ferreteria, data, isLoading, isError }
}