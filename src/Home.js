import React, {useState} from 'react'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import { productData, productDataTwo } from './components/Products/data'
import Sidebar from './components/Sidebar'
import Newsteller from './components/Newsteller'


const Home = () => {
  
    return (
        <div>
            
             <Hero />
             <Products heading='Choose your favorite' data={productData} />
              <Feature />
             <Products heading='Sweet Treats for You' data={productDataTwo} />
             <Newsteller />
      <Footer />

        </div>
    )
}

export default Home
