import React from 'react';
import AddPlayerForm from './AddPlayerForm';

const Roster = () => {
  const [players, setPlayers] = React.useState([]);

  const handlePlayerAdded = player => {
    setPlayers([...players, player]);
  };

  return (
    <div>
      <div>
        <h2>Ice</h2>
      </div>
      <div>
        <h2>Bench</h2>
        <ul>
          {players.map(player => (
            <li key={player.name}>{player.name}</li>
          ))}
        </ul>
      </div>
      <AddPlayerForm onPlayerAdded={handlePlayerAdded} />
    </div>
  );
};

export default Roster;
