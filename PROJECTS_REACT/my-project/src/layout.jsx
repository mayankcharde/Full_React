import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
//  OUTLET LAYOUT AS A BASE USE KR LEGA AUR UNKE BICH ME JO BHI CHIZE AYEGI USE CHANGE KREGA BS APNE WEBSITE ME 

function layout() {
  return (
    <div>
        <>
        <Header/>
        <Outlet/>

        <Footer/>
        </>
      
    </div>
  )
}

export default layout
