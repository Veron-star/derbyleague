import React from 'react';
import { LeagueCard, LeagueContainer, LeagueH1, LeagueWrapper, LeagueBtn, LeagueIcon, LeagueH2 } from './LeagueElement';
import img1 from '../../images/albany.jpg';


const League = () => {
    return (
        <LeagueContainer id="leagues">
            <LeagueH1>Roller Derby League in WA</LeagueH1>
            <LeagueWrapper>
                <LeagueCard>
                    <LeagueIcon src={img1} type="albany.jpg" />
                    <LeagueH2>ALBANY ROLLER DERBY LEAGUE</LeagueH2>
                    <LeagueBtn href="http://albanyrollerderby.com.au/" target="_blank">ALBANY</LeagueBtn>
                </LeagueCard>
            </LeagueWrapper>
        </LeagueContainer>
    )
}







// function League() {
//   return (
//     <main>
//       {derby.map(team => (
//         <League classes="rd" key={`${team.id}`}>
//           <League.Image src={team.image} alt={team.title} />
//           <League.Body>
//             <League.Title>{team.title}</League.Title>
//             <League.Text>{team.desc}</League.Text>
//             <League.Button>{team.ctaText}</League.Button>
//           </League.Body>
//         </League>
//       ))}
//     </main>
//   );
// }

export default League;
