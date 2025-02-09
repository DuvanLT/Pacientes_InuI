import {useQuery} from "@tanstack/react-query"

const fetchPatients = async (url) => {
    const response = await fetch(url)
    if (!response.ok) throw new Error("Error de carga de datos")
    return response.json()
}

export const usePatients = (url) => {
    return useQuery({
        queryKey: [url],
        queryFn: () => fetchPatients(url),
    })
}