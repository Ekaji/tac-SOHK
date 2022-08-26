/* eslint-disable react/jsx-key */
// import NavBar from '../layout/nav_bar/NavBar'
import Footer from '../layout/footer/Footer'
import { useState } from 'react'
import NavBar from './nav_bar/NavBar'

export default function Layout({children}) {

  return(
    <>
      <NavBar />
        <div style={{minHeight: '90vh'}} >
          {children}
        </div>
      <Footer />
    </>
  )
}