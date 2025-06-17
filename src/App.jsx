import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavbarMain from './components/navbar/NavbarMain';
import Hero from './components/HeroSction/Hero';
import SubHero from './components/SubHero';
import About from './components/About/About';
import HelperSection from "./components/HelperSection"
import Skills from './components/SkillsSection/Skills';
import SkillsBaseImg from './components/SkillsBaseImg';
import ExperienceMain from './components/Experience/ExperienceMain';
import ProjectsMain from './components/Projects/ProjectsMain';
import ContactMain from './components/Contact/ContactMain';
import Footer from './components/Footer';



function App() {
 return (
  <main role="main" className='font-body'>
    <NavbarMain/>
    <Hero/>
    <SubHero/>
    <About/>
    {/* <HelperSection/> */}
    <Skills/>
    <SkillsBaseImg/>
    <ExperienceMain/>
    <ProjectsMain/>
    <ContactMain/>
    <Footer/>
  </main>
 );
}

export default App
