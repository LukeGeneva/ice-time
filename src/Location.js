import React from 'react';
import { useDrop } from 'react-dnd';
import PlayerList from './PlayerList';
import './Location.css';

const Location = ({ name, players, onPlayerMoved }) => {
  const [, dropHere] = useDrop({
    accept: 'player',
    drop: ({ id }) => onPlayerMoved({ id, location: name })
  });

  const playersHere = players.filter(player => player.location === name);

  return (
    <div ref={dropHere}>
      <h2 className="Location__heading">{name}</h2>
      <PlayerList players={playersHere} />
    </div>
  );
};

export default Location;
