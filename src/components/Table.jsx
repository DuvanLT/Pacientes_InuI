import '../styles/table.css'
import { COLUMNS } from '../constants/table'
import { usePatients } from '../hook/usePatients'
import { usePatientContext } from '../context/patientContext'
import { API_URL } from '../constants/api'
import Card from './Card'
export default function Table() {
    const {data,refetch} = usePatients(`${API_URL}/patients`)
    const {selectedPatient, setSelectedPatient} = usePatientContext()
    const handlePatientSelection = (patient) => {setSelectedPatient(patient)}
    const handleDataUpdate = async () => {refetch()}
    return(
        <>
        <h1 className="table__title">Directorio de Pacientes</h1>
        <div className="table__container">
            <table className="table">
                <thead className="table__header">
                    <tr>
                        {COLUMNS.map((key) => (
                            <th key={key} className='table__header-element'>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="table__content">
                        {data?.patients?.map((patient) => (
                    <tr key={patient.id}>
                                  <td className="table__content-element">{patient.id}</td>
                                  <td className="table__content-element name" 
                                  onClick={() => handlePatientSelection(patient)}>{patient.Paciente}</td>
                                  <td className="table__content-element">CC - {patient.Identificacion}</td>
                                  <td className="table__content-element">{patient.Celular}</td>
                                  <td className="table__content-element">{patient.Entidad}</td>
                                  <td className="table__content-element">{patient["Ultima Atencion"]}</td>
                                  <td className="table__content-element">Consulta de <br /> {patient["Tipo de Atencion"]}</td>
                                  <td className="table__content-element">
                                 <span className={`status ${patient.Estado === "Critico" ? "critico"
                                     : patient.Estado === "Moderado" ? "moderado" : "estable"}`}>{patient.Estado}</span>
                                 </td>
                            </tr>
                        ))}
                    <tr>          
                     </tr>
                </tbody>
            </table>
        </div>
        {selectedPatient && <Card patientData={selectedPatient} onUpdate={handleDataUpdate} /> }
        </>
    )
}