import e from 'express'
import cors from 'cors'
import { useDB } from '../api/readData.js'
import { PORT } from '../constants/api.js'

const app = e()
app.use(cors())
app.use(e.json())

app.get("/patients", (req,res) => {
    const data = useDB()
    res.json(data)
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
