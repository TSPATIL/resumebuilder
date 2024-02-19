import React from 'react'
import '../styles/Home.css';
import Navbar from '../reuse/Navbar';
import Banner from '../reuse/Banner';
import Homeherosection1 from '../reuse/Homeherosection1';
import Homeherosection2 from '../reuse/Homeherosection2';
import Footer from '../reuse/Footer';

export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner />
      <Homeherosection1 />
      <Homeherosection2 />
      <Footer />
    </>
  )
}
