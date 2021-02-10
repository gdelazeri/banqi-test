const formatValue = (value, decimals = 2) => {
  if (value !== undefined) {
    return value.toFixed(decimals).replace('.', ',');
  }
  return value;
}

export default formatValue;
