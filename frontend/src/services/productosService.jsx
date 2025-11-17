// obtenemos todas las llamadas a las APIS de los productos
const backend = import.meta.env.VITE_BACKEND_URL

export const AllProducts = async (type) => {
    try {
        const response = await fetch(`${backend}/materialesLeonel/productos/getAll?type=${type}`)
        const result = await response.json()

        return result
    } catch (error) {
        console.error("Error en AllProducts, error: ", error)
        throw error
    }
}