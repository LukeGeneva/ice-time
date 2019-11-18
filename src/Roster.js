import React from 'react';
import AddPlayerForm from './AddPlayerForm';
import { useDrop } from 'react-dnd';
import PlayerList from './PlayerList';

const Roster = () => {
  const [players, setPlayers] = React.useState([]);

  const movePlayer = id => location =>
    setPlayers(
      players.map(player => ({
        ...player,
        location: player.id === id ? location : player.location
      }))
    );

  const [, dropOnIce] = useDrop({
    accept: 'player',
    drop: ({ id }) => movePlayer(id)('ice')
  });
  const [, dropOnBench] = useDrop({
    accept: 'player',
    drop: ({ id }) => movePlayer(id)('bench')
  });

  const handlePlayerAdded = player => {
    setPlayers([...players, player]);
  };

  const playersOn = location =>
    players.filter(player => player.location === location);

  return (
    <div>
      <div ref={dropOnIce}>
        <h2>Ice</h2>
        <PlayerList players={playersOn('ice')} />
      </div>
      <div ref={dropOnBench}>
        <h2>Bench</h2>
        <PlayerList players={playersOn('bench')} />
      </div>
      <AddPlayerForm onPlayerAdded={handlePlayerAdded} />
    </div>
  );
};

export default Roster;
