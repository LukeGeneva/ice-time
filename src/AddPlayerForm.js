import React from 'react';
import createPlayer from './createPlayer';

const AddPlayerForm = ({ onPlayerAdded }) => {
  const [name, setName] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onPlayerAdded(createPlayer(name));
    setName('');
  };

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="playerName">Add Player</label>
      <input id="playerName" type="text" value={name} onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPlayerForm;
