import uuid from 'uuid/v4';

const createPlayer = name => ({
  id: uuid(),
  name,
  location: 'bench',
  timeOnIce: 0
});

export default createPlayer;
