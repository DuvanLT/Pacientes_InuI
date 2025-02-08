import X from '../assets/X.svg'
import edit from '../assets/edit.svg'
import '../styles/card.css'
import Observation from './Observation'

export default function Card() {
    return(
        <>
            <div className="card__container">
                <div className="card">
                    <div className="card__header">
                        <h4 className="card__header-title">Informacion Paciente</h4>
                        <img className='card__header-close' src={X} alt="" />
                    </div>
                    <div className="card__content">
                        <div className="card__content-name">
                        <div className="card__information-item">
                                <div className="card__information-edit">
                                    <h5>Paciente</h5>
                                    <img src={edit} alt="" />
                                </div>
                                <p>Javier Andres Caicedo Rodriguez</p>
                            </div>
                        </div>
                        <div className="card__content-information">
                            <div className="card__information-item">
                                <div className="card__information-edit">
                                    <h5>Fecha de Nacimiento</h5>
                                    <img src={edit} alt="" />
                                </div>
                                <p>10/01/2000</p>
                            </div>
                            <div className="card__information-item">
                                <div className="card__information-edit">
                                    <h5>Fecha de Nacimiento</h5>
                                    <img src={edit} alt="" />
                                </div>
                                <p>10/01/2000</p>
                            </div>
                            <div className="card__information-item">
                                <div className="card__information-edit">
                                    <h5>Fecha de Nacimiento</h5>
                                    <img src={edit} alt="" />
                                </div>
                                <p>10/01/2000</p>
                            </div>
                            <div className="card__information-item">
                                <div className="card__information-edit">
                                    <h5>Fecha de Nacimiento</h5>
                                    <img src={edit} alt="" />
                                </div>
                                <p>10/01/2000</p>
                            </div>
                            <div className="card__information-item">
                                <div className="card__information-edit">
                                    <h5>Fecha de Nacimiento</h5>
                                    <img src={edit} alt="" />
                                </div>
                                <p>10/01/2000</p>
                            </div>
                            <div className="card__information-item">
                                <div className="card__information-edit">
                                    <h5>Fecha de Nacimiento</h5>
                                    <img src={edit} alt="" />
                                </div>
                                <p>10/01/2000</p>
                            </div>
                            <div className="card__information-item">
                                <div className="card__information-edit">
                                    <h5>Fecha de Nacimiento</h5>
                                    <img src={edit} alt="" />
                                </div>
                                <p>10/01/2000</p>
                            </div>
                            <div className="card__information-item">
                                <div className="card__information-edit">
                                    <h5>Fecha de Nacimiento</h5>
                                    <img src={edit} alt="" />
                                </div>
                                <p>10/01/2000</p>
                            </div>
                        </div>
                    </div>
                    <div className="card__footer">
                            <span className='card__footer-checkin'>Ultimo Checkin:</span>
                            <h5>Agregar Observacion</h5>
                            <textarea className='card__footer-text' name="" id=""></textarea>
                            <div className="card__button">
                                <button className='card__button-element'>Guardar</button>
                            </div>
                    </div>
                    <Observation />
                </div>
            </div>
        </>
    )
}