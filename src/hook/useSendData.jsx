import { API_URL } from "../constants/api"
export const useSendData = () => {
    const sendUpdatedData = async ({id,data}) => {
        try {
            const res = await fetch(`${API_URL}/patient/${id}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            return res.json()
        } catch (error) {
            console.error("Error al enviar los datos;", error)
        }
    }
    return {sendUpdatedData}
}