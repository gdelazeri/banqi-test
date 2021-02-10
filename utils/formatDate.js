const formatDate = (dateString) => {
  if (!dateString) {
    return '';
  }
  const date = new Date(dateString);
  const d = date.getDate();
  const m = date.getMonth() + 1;
  const y = date.getFullYear();
  const fDate = `${d < 10 ? `0${d}` : d}/${m < 10 ? `0${m}` : m}/${y.toString().substr(2, 2)}`;
  return fDate;
};

export default formatDate;
