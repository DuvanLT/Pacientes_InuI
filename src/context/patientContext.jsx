import { createContext, useContext, useState } from "react"
const PatientContext = createContext()
export function PatientProvider({children}) {
    const [selectedPatient, setSelectedPatient] = useState(null)
    return(
        <PatientContext.Provider value={{selectedPatient,setSelectedPatient}}>
        {children}
        </PatientContext.Provider>
    )
}

export function usePatientContext() {
    return useContext(PatientContext)
}