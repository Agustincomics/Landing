import { useState } from 'react'
import './App.css'
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import Banner from './components/principal/Banner'
import SobreNosotros from './components/principal/SobreNosotros'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './components/principal/LandingPage'
import PagPrincipal from './components/principal/PagPrincipal'
import Principal from './components/principal/Principal'
import MapContainer from './components/utilidades/MapContainer'
import ContactForm from './components/utilidades/ContactForm'

function App() {

  return (
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route path="/" element={<PagPrincipal></PagPrincipal>}></Route>
        <Route path="/AcercaDe" element={<SobreNosotros></SobreNosotros>}></Route>
        <Route exact path="/pedido" element></Route>
        <Route path="*" ></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
