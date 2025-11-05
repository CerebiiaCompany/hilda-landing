import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HildaPage from './pages/HildaPage'
import SantiagoPage from './pages/SantiagoPage'
import AddToHomeScreenModal from './components/AddToHomeScreenModal'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Navigate to="/hilda-palacios" replace />} />
        <Route path="/hilda-palacios" element={<HildaPage />} />
        <Route path="/santiago-castaneda" element={<SantiagoPage />} />
      </Routes>
      <AddToHomeScreenModal />
    </BrowserRouter>
  )
}

export default App
