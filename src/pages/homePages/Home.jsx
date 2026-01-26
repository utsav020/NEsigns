import React from 'react'
import './home.css';
import Hero from '../../components/sections/Hero'
import Footer from '../../components/layout/Footer'
import BrandStandOut from '../../components/sections/BrandStandOut'
import OurWork from '../../components/sections/OurWork'
import ServicesSection from '../../components/sections/ServicesSection'
import PortfolioSection from '../../components/sections/PortfolioSection'
import AboutCompany from '../../components/sections/AboutCompany'
import BlogSection from '../../components/sections/BlogSection'
import HeroSlider from '../../components/sections/HeroSlider'
import TestimonialSlider from '../../components/sections/TestimonialSlider'
import PlayVideo from '../../components/sections/PlayVideo'

export default function Home() {
  return (
    <>
      <Hero/>
      <HeroSlider/>
      <BrandStandOut/>
      <OurWork/>
      <AboutCompany/>
      <ServicesSection/>
      <PortfolioSection/>
      <PlayVideo/>
      <TestimonialSlider/>
      <BlogSection/>
      <Footer/>
    </>
  )
}
