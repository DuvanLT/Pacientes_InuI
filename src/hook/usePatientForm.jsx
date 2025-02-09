import { useState } from 'react'
import { useSendData } from '../hook/useSendData'

export function usePatientForm(initialData, onUpdate) {
  const [data, setData] = useState(initialData)
  const [editFields, setEditFields] = useState({})
  const [observacionInput, setObservacionInput] = useState('')
  const { sendUpdatedData } = useSendData()

  const handleChangeData = (key, value) => {
    setData((prev) => ({ ...prev, [key]: value }))
  }

  const toggleField = (key) => {
    setEditFields((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSendData = async (id) => {
    const updatedData = { ...data}

    if (observacionInput.length > 5) {
      updatedData.Observacion = observacionInput
    }

    try {
      await sendUpdatedData({ id, data: updatedData })
      setData(updatedData)
      if (observacionInput.length > 5) {
        setObservacionInput('')
      }
      onUpdate()
    } catch (error) {
        console.error("Error al enviar los datos:", error)
    }
  }

  return {
    data,editFields,observacionInput,setObservacionInput,handleChangeData,toggleField,handleSendData,
  }
}
