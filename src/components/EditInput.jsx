import edit from '../assets/Edit.svg'
export default function EditInput({label,value,onToggle,isEditing,inputName,onChange}) {
    return(
        <>
         <div className="card__information-item">
           <div className="card__information-edit">
                <h5>{label}</h5>
                <img className='card__edit-icon' onClick={onToggle} src={edit} alt="" />
        </div>
            <input className={`card__information-input ${inputName ? "card__input-name" : ""}`}
            type="text" disabled={!isEditing} value={value}  onChange={(e) => onChange(e.target.value)}  />
        </div>
        </>
    )
}