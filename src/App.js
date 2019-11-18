import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import './App.css';
import Clock from './Clock';
import Roster from './Roster';

function App() {
  const hasTouch = navigator.maxTouchPoints > 0;
  const backend = hasTouch ? TouchBackend : HTML5Backend;

  return (
    <div className="App">
      <DndProvider backend={backend}>
        <Clock />
        <Roster />
      </DndProvider>
    </div>
  );
}

export default App;
