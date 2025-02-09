import e from 'express'
import cors from 'cors'
import { useDB } from '../api/readData.js'
import { PORT } from '../constants/api.js'
import { DB_FILE } from '../constants/api.js'
import fs from 'fs'

const app = e()
app.use(cors())
app.use(e.json())

app.get("/patients", (req,res) => {
    const data = useDB()
    res.json(data)
})

app.put("/patient/:id", (req,res) => {
    const {id} = req.params
    const database = useDB()
    let patients = database.patients || []

    let patientIndex = patients.findIndex(patient => patient.id === parseInt(id))

    if(patientIndex !== -1){
        patients[patientIndex] = {
            ...patients[patientIndex],
            ...req.body
        }

        fs.writeFileSync(DB_FILE, JSON.stringify(database, null, 2), 'utf8')
        res.status(200).json({message: "Datos actualizados"})
    }else{
        res.status(404).json({message: "Paciente no encontrado"})
    }

})



app.listen(PORT, () => console.log(`server running on port ${PORT}`))
