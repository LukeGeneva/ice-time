import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import './App.css';
import AddPlayerForm from './AddPlayerForm';
import Location from './Location';

function App() {
  const hasTouch = navigator.maxTouchPoints > 0;
  const backend = hasTouch ? TouchBackend : HTML5Backend;
  const [players, setPlayers] = React.useState([]);
  const [isInPlay, setIsInPlay] = React.useState(false);

  const incrementIceTimes = React.useCallback(
    () =>
      setPlayers(
        players.map(player => ({
          ...player,
          timeOnIce:
            player.location === 'ice' ? player.timeOnIce + 1 : player.timeOnIce
        }))
      ),
    [players]
  );

  React.useEffect(() => {
    if (!isInPlay) return;
    const timeout = setTimeout(incrementIceTimes, 1000);
    return () => clearTimeout(timeout);
  }, [isInPlay, incrementIceTimes]);

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

  const handlePlayClick = () => setIsInPlay(!isInPlay);

  return (
    <div className="App">
      <DndProvider backend={backend}>
        <button onClick={handlePlayClick}>{isInPlay ? 'Stop' : 'Play'}</button>
        <Location
          name="ice"
          players={players}
          onPlayerMoved={handlePlayerMoved}
        />
        <button>Swap</button>
        <Location
          name="bench"
          players={players}
          onPlayerMoved={handlePlayerMoved}
        />
        <AddPlayerForm onPlayerAdded={handlePlayerAdded} />
      </DndProvider>
    </div>
  );
}

export default App;
