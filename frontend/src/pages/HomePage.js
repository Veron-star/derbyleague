import React, { useState } from 'react';
import HeroSection from '../components/Dashboard/HeroSection';
import InfoSection from '../components/Dashboard/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/Dashboard/InfoSection/Data';
import Navbar from '../components/Dashboard/Navbar';
import Sidebar from '../components/Dashboard/Sidebar';
import ScrollToTop from '../components/ScrollToTop';

const HomePage = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
           <ScrollToTop />        
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar toggle={toggle} />
           <HeroSection />
           <InfoSection {...homeObjOne} />
           <InfoSection {...homeObjTwo} />
           <InfoSection {...homeObjThree} />
           <InfoSection {...homeObjFour} />
        </>
    )
}

export default HomePage;
