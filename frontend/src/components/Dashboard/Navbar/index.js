import React, { useEffect, useState } from "react";
import {FaBars} from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinkS, NavBtn, NavBtnLink } from './NavbarElement';



const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{ color: "#fff" }}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>DERBY:LEAGUE</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinkS to="about"
                            smooth={true} duration={500} spy={true} exact="true" offset={-80} 
                            >About</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="league"
                            smooth={true} duration={500} spy={true} exact="true" offset={-80} 
                            >League</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="scoreboard"
                            smooth={true} duration={500} spy={true} exact="true" offset={-80} 
                            >ScoreBoard</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="signup"
                            smooth={true} duration={500} spy={true} exact="true" offset={-80} 
                            >Register</NavLinkS>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/login">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </>
    );
};

export default Navbar;