import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './components/Hero'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <div className='min-h-[70vh]'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>

    </div>
    </>
  )
}

export default App
