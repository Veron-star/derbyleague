import React from 'react';
import { LeagueButton, LeagueCard, LeagueContainer, LeagueDesc, LeagueHeading, LeagueImg, LeagueInfo, LeagueTitle, LeagueWrapper } from './LeaguesElement';


const League = ({heading, data}) => {
    return (
        <LeagueContainer>
            <LeagueHeading>{heading}</LeagueHeading>
            <LeagueWrapper>
                {data.map((leagues, index) => {
                    return (
                        <LeagueCard key={index}>
                            <LeagueImg src={leagues.img} alt={leagues.alt} />
                            <LeagueInfo>
                                <LeagueTitle>{leagues.name}</LeagueTitle>
                                <LeagueDesc>{leagues.desc}</LeagueDesc>
                                <LeagueButton href={leagues.link}>{leagues.button}</LeagueButton>
                            </LeagueInfo>
                        </LeagueCard>
                    )
                })}
            </LeagueWrapper>
            
        </LeagueContainer>
    )
}

export default League;
