// obtenemos toda la informacion de las ferreterias
const backend = import.meta.env.VITE_BACKEND_URL

export const FerreteriaInfo = async () => {
    try {
        const response = await fetch(`${backend}/materialesLeonel/ferreteria/info`)
        const result = await response.json()

        return result
    } catch (error) {
        console.error("Error en FerreteriaInfo, error: ", error)
        throw error
    }
}