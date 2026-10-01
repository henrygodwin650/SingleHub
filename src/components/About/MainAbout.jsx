import React from 'react'
import AboutHeader from './AboutHeader';
import AboutCard from './AboutCard';
import AboutCard2 from './AboutCard2';
import AboutSlider from './AboutSlider';
import AboutFAQ from './AboutFAQ.jsx';
import AboutJoin from './AboutJoin.jsx';
import Navbar from './Navbar';
import Footer from '../Footer/Footer';

const MainAbout = () => {
  return (
    <div>
      <Navbar />
      <AboutHeader />
      <AboutCard />
      <AboutCard2 />
      <AboutSlider />
      <AboutFAQ />
      <AboutJoin />
      <Footer />
    </div>
  )
}

export default MainAbout