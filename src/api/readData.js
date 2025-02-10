import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()


const DATABASE = process.env.DB_FILE

export const useDB = () => {
    const data = fs.readFileSync(DATABASE, "utf8")
    const jsonData = JSON.parse(data)
    return jsonData || jsonData.pacientes
}