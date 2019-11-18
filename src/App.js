import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './App.css';
import Clock from './Clock';
import Roster from './Roster';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Clock />
        <Roster />
      </DndProvider>
    </div>
  );
}

export default App;
