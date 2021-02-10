import useLanguage from '../language/useLanguage';

const formatAmount = (value, decimals = 2) => {
  const { Global } = useLanguage();

  if (value !== undefined) {
    const amount = Math.abs(value).toFixed(decimals).replace('.', ',');
    let text = Number(value) < 0 ? `- ` : '';
    text += Global.currency + ' ';
    text += amount;
    return text;
  }

  return value;
}

export default formatAmount;
