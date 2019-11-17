const formatTime = seconds => {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  const pad = n => n.toString().padStart(2, '0');
  return `${pad(min)}:${pad(sec)}`;
};

export default formatTime;
