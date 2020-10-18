import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import SignUp from '../components/Signup';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle} />
           <Navbar />
           <HeroSection />
           <InfoSection {...homeObjOne} />
           {/* <About /> */}
           <InfoSection {...homeObjTwo} />
           <Services />
           <InfoSection {...homeObjThree} />
           <SignUp />
           <Footer />
        </>
    )
}

export default Home;
