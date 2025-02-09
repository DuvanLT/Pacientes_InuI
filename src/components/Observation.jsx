import Trash from '../assets/Trash.svg'
import '../styles/observation.css'
export default function Observation({observation, doctor="Dra. Camila Zapata Zuñiga", doctorType="Medico general"}) {
    return(
                    <div className="observation">
                        <div className="observation__doctor">
                            <div className="observation__doctor-container">
                                <h5 className="observation__doctor-name">{doctor}</h5>
                                    <img className="observation__trash" src={Trash} alt="" />
                    </div>
                    <p className="observation__doctor-type">{doctorType}</p>
                    </div>
                    <div className="observation__text">
                        <p className="observation__text-element">{observation}</p>
                    </div>
                    </div>
    )
}