import React, { useEffect, useState } from 'react'
import AnimateBg from './component/AnimateBg';
import Header from './component/Header';
import Hero from './component/Hero';
import Client from './component/Client';
import Services from './component/Services';
import Work from './component/Work';
import Stats from './component/Stats';
import Testimonial from './component/Textimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {

  const [isDarkmode, setIsDarkmode] = useState(true);
  const toggletheme = ()=>{
    setIsDarkmode(!isDarkmode);
  }

  useEffect(()=>{
   document.body.className = isDarkmode ? "dark-mode font-sans overflow-x-hidden" : "light-mode font-sans overflow-x-hidden"
  },[isDarkmode])
  return (
    <div className='font-sans overflow-x-hidden'>
    <AnimateBg/>
    <Header isDarkmode={isDarkmode} toggletheme = {toggletheme}/>

    <main>
       <Hero/>
       <Client/>
       <Services/>
       <Work/>
       <Stats/>
       <Testimonial/>
       <Contact/>


    </main>
    <Footer/>
    </div>
  )
}

export default App
