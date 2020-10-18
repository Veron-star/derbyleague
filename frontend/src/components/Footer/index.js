import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterWrap, FooterLinkTitle, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, SocialIconLink, WebsiteRights } from './FooterElement';
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to="/signin">Admin</FooterLink>
                                <FooterLink to="/signin">About</FooterLink>
                                <FooterLink to="/signin">About</FooterLink>
                                <FooterLink to="/signin">About</FooterLink>   
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>    
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/signin">FaceBook</FooterLink>
                                <FooterLink to="/signin">Instagram</FooterLink>
                                <FooterLink to="/signin">Twitter</FooterLink>
                                <FooterLink to="/signin">About</FooterLink>   
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Derby</SocialLogo>
                        <WebsiteRights>Derby {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
};

export default Footer;
