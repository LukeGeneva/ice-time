import React from 'react';
import AddPlayerForm from './AddPlayerForm';
import Location from './Location';

const Roster = () => {
  const [players, setPlayers] = React.useState([]);

  const handlePlayerMoved = ({ id, location }) =>
    setPlayers(
      players.map(player => ({
        ...player,
        location: player.id === id ? location : player.location
      }))
    );

  const handlePlayerAdded = player => {
    setPlayers([...players, player]);
  };

  return (
    <div>
      <Location
        name="ice"
        players={players}
        onPlayerMoved={handlePlayerMoved}
      />
      <Location
        name="bench"
        players={players}
        onPlayerMoved={handlePlayerMoved}
      />
      <AddPlayerForm onPlayerAdded={handlePlayerAdded} />
    </div>
  );
};

export default Roster;
