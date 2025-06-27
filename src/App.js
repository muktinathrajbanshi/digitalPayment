import React from 'react'
import Navbar from './navbar';
import Header from './Header';
import HowitWorks from './HowitWorks';
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowitWorks />
      <Aboutus />
      <Services />
      <Contact />
    </>
  )
}

export default App;
