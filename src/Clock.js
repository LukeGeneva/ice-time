import React from 'react';
import formatTime from './formatTime';

const Clock = () => {
  const [secondsRemaining, setSecondsRemaining] = React.useState(27 * 60);
  const [isRunning, setIsRunning] = React.useState(false);

  React.useEffect(() => {
    if (!isRunning) return;
    const timeout = setTimeout(
      () => setSecondsRemaining(secondsRemaining - 1),
      1000
    );
    return () => clearTimeout(timeout);
  }, [isRunning, secondsRemaining]);

  const handleRunClick = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <div>{formatTime(secondsRemaining)}</div>
      <button onClick={handleRunClick}>{isRunning ? 'Stop' : 'Run'}</button>
    </div>
  );
};

export default Clock;
