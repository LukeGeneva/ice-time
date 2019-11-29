import React from 'react';
import { useDrag } from 'react-dnd';
import formatTime from './formatTime';

const PlayerListItem = ({ player }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'player', id: player.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <li ref={drag} key={player.name} style={{ opacity }}>
      {player.name} - TOI: {formatTime(player.timeOnIce)}
    </li>
  );
};

export default PlayerListItem;
