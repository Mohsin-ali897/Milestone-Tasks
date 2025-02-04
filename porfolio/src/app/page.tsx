'use client'
import React, { useEffect } from 'react'
import Intro from './component/intro'
import About from './component/about'
import ContactForm from './component/contact'
import Footer from './component/footer'
import Projects from './component/project'
import AOS from "aos"
import 'aos/dist/aos.css'
export default function home() {
  useEffect(()=>{
    AOS.init({
      easing:"ease-in-out-back",
      duration:500,
      delay:20,
      mirror:true,
      anchorPlacement:"bottom-bottom",
      offset:160,
    });
    AOS.refresh()
  },[])
  return (
    <div>
      <Intro/>
      <About/>
      <Projects/>
      <ContactForm/>
      <Footer/>

    </div>
  )
}
