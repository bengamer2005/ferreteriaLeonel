import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
// servicios
import { FerreteriaInfo } from "../services/sucursalService"

export const useSucursalPage = () => {
    const [ferreteriaInfo, setFerreteriaInfo] = useState([])
    const [ferreteriaTel, setFerreteriaTel] = useState([])

    const { data, refetch, isLoading, isError } = useQuery({
        queryKey: ["ferreteriaInfo"],
        queryFn: FerreteriaInfo
    })

    useEffect(() => {
        if(data) {
            setFerreteriaInfo(data.ferreteriasInfo || [])
            setFerreteriaTel(data.ferreteriaTel || [])
        }
    }, [data])

    return { ferreteriaInfo, ferreteriaTel, refetch, isLoading, isError }
}