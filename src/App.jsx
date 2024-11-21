import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About'
import { Home } from './Components/Home'
import Service from './Components/Service'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <div className='AppBody'>

    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>

    
    </div>
        
    </>
  )
}

export default App
