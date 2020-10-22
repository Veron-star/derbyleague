import React from 'react';
import './App.scss';
import { Card } from './Cards';
import leagues from './data.json';

function Leagues() {
  return (
    <main>
      {leagues.map(league => (
        <Card classes="derby" key={`${league.id}`}>
          <Card.Image src={league.image} alt={league.title} />
          <Card.Body>
            <Card.Title>{league.title}</Card.Title>
            <Card.Link>{league.href}</Card.Link>
            <Card.Button>{league.ctaText}</Card.Button>
          </Card.Body>
        </Card>
      ))}
    </main>
  );
}

export default Leagues;
