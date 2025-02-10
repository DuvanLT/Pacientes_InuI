import { DB_FILE } from "../constants/api.js";
import fs from 'fs'

const DATABASE = DB_FILE

export const useDB = () => {
    const data = fs.readFileSync(DATABASE, "utf8")
    const jsonData = JSON.parse(data)
    return jsonData || jsonData.pacientes
}