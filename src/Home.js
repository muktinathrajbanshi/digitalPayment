import React from 'react'
import Navbar from './navbar';
import Header from './Header';
import HowitWorks from './HowitWorks';
import Aboutus from './Aboutus';
import Services from './Services';
import Contacts from './Contact';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowitWorks />
      <Aboutus />
      <Services />
      <Contacts />
      <Footer />
    </>
  )
}

export default Home;
