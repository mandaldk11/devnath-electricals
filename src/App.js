import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Services from './Components/Services'
import ContactUs from './Components/ContactUs'
import AboutUs from './Components/AboutUs'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Footer from './Components/Footer'
export default function App() {
  return (
    <div className='container'>
      <Router>
         <Navbar/>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/about' element={ <AboutUs/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </Router>
     
    </div>
  )
}



