import React from 'react'
import Navbar from './componets/Navbar'
import Header from './componets/Header'
import About from './componets/About'
import Project from './componets/Project'
import Signin from './componets/Signin'
import Contact from './componets/Contact'
import Footer from './componets/Footer'

function Template() {
  return (
    <>
        <Navbar />
        <Header />
        <About />
        <Project />
        <Signin />
        <Contact />
        <Footer />
    </>
  )
}

export default Template