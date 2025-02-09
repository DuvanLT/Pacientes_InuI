import X from '../assets/X.svg'
import { PATIENT_INFO } from '../constants/card'
import { usePatientContext } from '../context/patientContext'
import { usePatientForm } from '../hook/usePatientForm'
import '../styles/card.css'
import EditInput from './EditInput'
import Observation from './Observation'

export default function Card({patientData, onUpdate}) {
    const {editFields,toggleField,handleChangeData,observacionInput,setObservacionInput,handleSendData,data
    } = usePatientForm(patientData,onUpdate)
    const {setSelectedPatient} = usePatientContext()
    const handleClosePatient = () => {setSelectedPatient(null)}
    return(
        <>
            <div className="card__container">
                <div className="card">
                    <div className="card__header">
                        <h4 className="card__header-title">Informacion Paciente</h4>
                        <img className='card__header-close' onClick={handleClosePatient}  src={X} alt="" />
                    </div>
                    <div className="card__content">
                        <div className="card__content-name">
                        <EditInput label="Paciente" value={data.Paciente} isEditing={editFields['Paciente'] || false}
                                onToggle={() => toggleField('Paciente')} inputName={true} onChange={(value) => handleChangeData('Paciente', value)}
                               />
                        </div>
                        <div className="card__content-information">
                            {PATIENT_INFO.map((info) => (
                               <EditInput key={info.value} label={info.title} value={data[info.value]} isEditing={editFields[info.value] || false}
                                onToggle={() => toggleField(info.value)} inputName={false} onChange={(value) => handleChangeData(info.value, value)}
                               />
                            ))}
                        </div>
                    </div>
                    <div className="card__footer">
                            <span className='card__footer-checkin'>Ultimo Checkin: {data.Checkin || "Sin registro"}</span>
                            <h5>Agregar Observacion</h5>
                            <textarea className='card__footer-text' placeholder='Observacion' value={observacionInput}
                            onChange={(e) => setObservacionInput(e.target.value)}
                            ></textarea>
                            <div className="card__button">
                                <button onClick={() => handleSendData(patientData.id)} className='card__button-element'>Guardar</button>
                            </div>
                    </div>
                    {data.Observacion !== "" && <Observation observation={data.Observacion} />}
                </div>
            </div>
        </>
    )
}