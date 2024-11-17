import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"
import './App.css'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'

function App() {

  return (
    <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard/:id" element={<Dashboard/>} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
