import React from 'react'
import Hero from '../Components/hero';
import Content from '../Components/Content';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import Cta from '../Components/Cta';
import Gallery from '../Components/Gallery';

export default function Home() {
  return (
    <div>
         <div className="bg-slate-100">
      <Nav />
      <Hero />
      {/* <br /> */}
      {/* <div className="mt-0 mb-10"> */}
        {/* <Gallery /> */}
      {/* </div> */}
      {/* <hr /> */}
      {/* <div className="mt-12"> */}
        {/* <Content /> */}
      {/* </div> */}
      {/* <br /> */}
      {/* <hr /> */}
      {/* <div className="mt-12"> */}
        {/* <Cta /> */}
      {/* </div> */}
      {/* <footer> */}
        {/* <Footer /> */}
      {/* </footer> */}
      </div>
      
    </div>
  )
}
