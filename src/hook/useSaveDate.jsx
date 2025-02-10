import { useState } from "react"

export function useSaveDate() {
    const [date,setDate] = useState("")

    const saveDate = () => {
        const fecha = new Date()
        const builDate = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} Hora: ${fecha.getHours()}:${fecha.getMinutes()}`
        setDate(builDate)
        return builDate
    }
    return {date,saveDate}
}