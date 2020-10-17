import React from "react";
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinkS, NavBtn, NavBtnLink } from './NavbarElement';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>DERBY</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinkS to="about">About</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="discover">Discover</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="scoreboard">ScoreBoard</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="signup">Sign Up</NavLinkS>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar;