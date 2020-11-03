import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinkTitle, FooterLinksContainer, FooterWrap, FooterLinksWrapper, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from "./FooterElement";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">DERBY</SocialLogo>
                        <WebsiteRights>All Rights Reserved 2020</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/" target="_blank" aria-label="FaceBook" rel="noopener noreferrer">
                            <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                            <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
                            <FaYoutube />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;

