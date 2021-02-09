const formatValue = (value, decimals = 2) => {
  if (value !== undefined) {
    if (value % 1 === 0) {
      return value.toFixed(0);
    }
    return value.toFixed(decimals).replace('.', ',');
  }
  return value;
}

export default formatValue;
