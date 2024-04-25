import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Page1 from './Pages/Page1'
import Nav from './Componet/Nav'
import Page2 from './Pages/Page2'

function App() {

  return (
    <>
        <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path='/' element={<Page1/>} />
            <Route path='/p2' element={<Page2/>} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
