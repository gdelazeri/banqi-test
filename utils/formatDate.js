const formatDate = (dateString, time = false) => {
  if (!dateString) {
    return '';
  }
  const date = new Date(dateString);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  const fDate = `${d < 10 ? `0${d}` : d}/${m < 10 ? `0${m}` : m}/${y.toString().substr(2, 2)}`;

  if (time) {
    const hours = date.getUTCHours();
    const minutes = date.getMinutes();
    return `${fDate} ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }
  return fDate;
};

export default formatDate;
