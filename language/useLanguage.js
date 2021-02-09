import locales from './locales';

const useLanguage = () => {
  return {
    ...locales(),
  };
};

export default useLanguage;
