import React from 'react';
import { Button } from '../ButtonElement';
import { LeagueCard, LeagueContainer, LeagueH1, LeagueH2, LeagueIcon, LeagueP, LeagueWrapper } from './LeagueElement';
import Icon1 from '../../images/albany.jpg';
import Icon2 from '../../images/dread pirate.jpg';
import Icon3 from '../../images/gold city.jpg';
import Icon4 from '../../images/margaret river.jpg';
import Icon5 from '../../images/northwest.jpg';
import Icon6 from '../../images/perthjunior.png';
import Icon7 from '../../images/perthmen.png';
import Icon8 from '../../images/perthroller.jpg';
import Icon9 from '../../images/wa.png';

const Leagues = () => {
  return (
    <LeagueContainer id="leagues">
      <LeagueH1>Roller Derby League Western Australia</LeagueH1>
      <LeagueWrapper>
        <LeagueCard>
          <LeagueIcon src={Icon1}/>
          <LeagueH2>ALBANY ROLLER DERBY LEAGUE</LeagueH2>
          <LeagueP>ALBANY</LeagueP>
          <Button href='http://albanyrollerderby.com.au/'>VISIT</Button>
          <LeagueIcon src={Icon2}/>
          <LeagueH2>DREAD PIRATE ROLLERS</LeagueH2>
          <LeagueP>KWINANA, PERTH</LeagueP>
          <Button href='https://dreadpiraterollers.com.au/'>VISIT</Button>
          <LeagueIcon src={Icon3}/>
          <LeagueH2>GOLD CITY ROLLERS INC</LeagueH2>
          <LeagueP>KALGOORLIE</LeagueP>
          <Button href='https://www.facebook.com/GoldCityRollers?ref=ts&fref=ts'>VISIT</Button>
          <LeagueIcon src={Icon4}/>
          <LeagueH2>MARGARET RIVER ROLLER DERBY</LeagueH2>
          <LeagueP>MARGARET RIVER</LeagueP>
          <Button href='https://www.facebook.com/margaretriverrollerderby/?ref=ts&fref=ts'>VISIT</Button>
          <LeagueIcon src={Icon5}/>
          <LeagueH2>NORTH WEST ROLLER DERBY</LeagueH2>
          <LeagueP>SOUTH HEDLAND</LeagueP>
          <Button href='http://www.northwestrollerderby.com/'>VISIT</Button>
          <LeagueIcon src={Icon6}/>
          <LeagueH2>PERTH JUNIOR ROLLER DERBY</LeagueH2>
          <LeagueP>MORLEY, PERTH</LeagueP>
          <Button href='http://www.perthjrderby.com.au/'>VISIT</Button>
          <LeagueIcon src={Icon7}/>
          <LeagueH2>PERTH MEN'S DERBY</LeagueH2>
          <LeagueP>MAYLANDS, PERTH</LeagueP>
          <Button href='http://www.perthmensderby.com.au/'>VISIT</Button>
          <LeagueIcon src={Icon8}/>
          <LeagueH2>PERTH ROLLER DERBY</LeagueH2>
          <LeagueP>MORLEY, PERTH</LeagueP>
          <Button href='http://www.perthrollerderby.com.au/'>VISIT</Button>
          <LeagueIcon src={Icon9}/>
          <LeagueH2>WA ROLLER DERBY</LeagueH2>
          <LeagueP>PERTH</LeagueP>
          <Button href='http://www.warollerderby.com.au/'>VISIT</Button>
        </LeagueCard>
      </LeagueWrapper>
    </LeagueContainer>
  )
}

export default Leagues;
