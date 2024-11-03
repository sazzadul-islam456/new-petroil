import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Supplier from './components/Supplier/Supplier'


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Supplier />
    </div>
  )
}

export default App