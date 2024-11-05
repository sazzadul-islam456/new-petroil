import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Supplier from './components/Supplier/Supplier'
import Slider from './components/Slider.jsx/Slider'
import Services from './components/Services/Services'
import About from './components/About/About'
import Card from './components/card/Card'
import Map from './components/Map/Map'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
      <Slider />
      <Services />
      <About />
      <Card />
      <Map />
      <Footer />
    </div>
  )
}

export default App