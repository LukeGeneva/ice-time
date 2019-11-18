import React from 'react';
import AddPlayerForm from './AddPlayerForm';
import PlayerListItem from './PlayerListItem';
import { useDrop } from 'react-dnd';

const Roster = () => {
  const [players, setPlayers] = React.useState([]);
  const [, dropOnIce] = useDrop({
    accept: 'player',
    drop: ({ id }) =>
      setPlayers(
        players.map(player => ({
          ...player,
          location: player.id === id ? 'ice' : player.location
        }))
      )
  });
  const [, dropOnBench] = useDrop({
    accept: 'player',
    drop: ({ id }) =>
      setPlayers(
        players.map(player => ({
          ...player,
          location: player.id === id ? 'bench' : player.location
        }))
      )
  });

  const handlePlayerAdded = player => {
    setPlayers([...players, player]);
  };

  return (
    <div>
      <div ref={dropOnIce}>
        <h2>Ice</h2>
        {players
          .filter(player => player.location === 'ice')
          .map(player => (
            <PlayerListItem key={player.name} player={player} />
          ))}
      </div>
      <div ref={dropOnBench}>
        <h2>Bench</h2>
        <ul>
          {players
            .filter(player => player.location === 'bench')
            .map(player => (
              <PlayerListItem key={player.name} player={player} />
            ))}
        </ul>
      </div>
      <AddPlayerForm onPlayerAdded={handlePlayerAdded} />
    </div>
  );
};

export default Roster;
