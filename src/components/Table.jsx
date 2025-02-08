import '../styles/table.css'
export default function Table() {
    return(
        <>
        <h1 className="table__title">Directorio de Pacientes</h1>
        <div className="table__container">
            <table className="table">
                <thead className="table__header">
                    <tr>
                        <th className="table__header-element">ID</th>
                        <th className="table__header-element">Paciente</th>
                        <th className="table__header-element">Identificacion</th>
                        <th className="table__header-element">Celular</th>
                        <th className="table__header-element">Entidad</th>
                        <th className="table__header-element">Ultima Atencion</th>
                        <th className="table__header-element">Tipo de Atencion</th>
                        <th className="table__header-element">Estado</th>
                    </tr>
                </thead>
                <tbody className="table__content">
                    <tr>
                        <td className="table__content-element">12425</td>
                        <td className="table__content-element name">Javier Andrés Caicedo Rodriguez</td>
                        <td className="table__content-element">CC - 523526575</td>
                        <td className="table__content-element">30532523525</td>
                        <td className="table__content-element">Eps Sanitas</td>
                        <td className="table__content-element">10/02/2024</td>
                        <td className="table__content-element">Consulta de <br />    Psiquiatria</td>
                        <td className="table__content-element">
                            <span className="status">Estable</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}