import * as Localization from 'expo-localization';

import ptBR from './pt-BR';

const getLanguages = () => {
  const locale = Localization.locale;
  switch (locale) {
    case 'pt-BR':
    default:
      return ptBR;
  }
}

export default getLanguages;
