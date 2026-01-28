import React from 'react'
import AboutHero from '../../components/sections/knowyoursign/AboutHero.jsx'
import BestAgency from '../../components/sections/knowyoursign/BestAgency.jsx'
import AboutServices from '../../components/sections/knowyoursign/AboutServices.jsx'
import Footer from '../../components/layout/Footer.jsx'
import HightqytPrinting from '../../components/sections/knowyoursign/HightQytPrinting.jsx'
import KnowMoreAboutUs from '../../components/sections/knowyoursign/KnowMoreAboutUs.jsx'

export default function KnowYourSign() {
  return (
    <>
      <AboutHero />
      <BestAgency />
      <AboutServices/>
      <KnowMoreAboutUs/>
      <HightqytPrinting/>
      <Footer/>
    </>
  )
}
