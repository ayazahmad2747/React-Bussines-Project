import React from 'react'
import './App.css'
import Navbar from './Componenet/Navbar/Navbar'
import Home from './Componenet/Home/Home'
import About from './Componenet/About/About'
import Services from './Componenet/Sevices/Services';
import Blog from './Componenet/Blog/Blog'
import Contact from './Componenet/Contact/Contact';
import Footer from './Componenet/Footer/Footer'
const App = () => {
  return (
    <div className='App'>
    <Navbar/>
    <Home/>
    <About/>
    <Services/>
    <Blog/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App

