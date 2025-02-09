import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Card from './components/Card'
import Table from './components/Table'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Table />
      <Card />
    </QueryClientProvider>
  )
}

export default App
