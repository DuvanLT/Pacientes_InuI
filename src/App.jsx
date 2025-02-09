import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Table from './components/Table'
import { PatientProvider } from './context/patientContext'

function App() {
  const queryClient = new QueryClient()
  return (
  <QueryClientProvider client={queryClient} >
    <PatientProvider>
    <Table />
    </PatientProvider>
  </QueryClientProvider>
  )
}

export default App
