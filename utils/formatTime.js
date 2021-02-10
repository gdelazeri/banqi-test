const formatTime = (dateString, time = false) => {
  if (!dateString) {
    return '';
  }
  const date = new Date(dateString);
  const hours = date.getUTCHours();
  const minutes = date.getMinutes();

  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
};

export default formatTime;
