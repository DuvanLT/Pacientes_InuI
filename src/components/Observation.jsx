import Trash from '../assets/Trash.svg'
import '../styles/observation.css'
export default function Observation() {
    return(
                    <div className="observation">
                        <div className="observation__doctor">
                            <div className="observation__doctor-container">
                                <h5 className="observation__doctor-name">Dra. Camila Zapata Zuñiga</h5>
                                    <img className="observation__trash" src={Trash} alt="" />
                    </div>
                    <p className="observation__doctor-type">Medico general</p>
                    </div>
                    <div className="observation__text">
                        <p className="observation__text-element">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, animi.</p>
                    </div>
                    </div>
    )
}