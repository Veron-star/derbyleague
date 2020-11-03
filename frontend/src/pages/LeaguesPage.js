import React from 'react';
import League from '../components/Dashboard/Leagues';
import { leaguesData } from '../components/Dashboard/Leagues/data';


const LeaguesPage = () => {
    return (
        <>
            <League heading='Roller Derby League in Western Australia' data={leaguesData} />
        </>
    )
}

export default LeaguesPage;
