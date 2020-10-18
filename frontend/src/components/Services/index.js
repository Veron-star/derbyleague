import React from 'react';
import { ServicesContainer, ServicesCard, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServiceElement';
import Icon1 from '../../images/img1.jpg';
import Icon2 from '../../images/img2.jpg';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Content</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>League</ServicesH2>
                    <ServicesP>Search Your Local Roller Derby League Near You!</ServicesP>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>SCRIM</ServicesH2>
                    <ServicesP>Check the latest SCRIM results.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer>
    )
}

export default Services;
