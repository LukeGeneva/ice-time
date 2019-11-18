import React from 'react';
import PlayerListItem from './PlayerListItem';

const PlayerList = ({ players }) => {
  return (
    <ul>
      {players.map(player => (
        <PlayerListItem key={player.id} player={player} />
      ))}
    </ul>
  );
};

export default PlayerList;
