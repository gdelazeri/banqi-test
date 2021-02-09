if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Platform, UIManager } from 'react-native';

import Navigator from './navigation';
import store from './store';
import theme from './assets/theme';

const App = () => {
  const [loadedAssets, setLoadedAssets] = useState(false);

  if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  const loadAssets = async () => {
    await Font.loadAsync({
      'Roboto-Bold': {
        uri: require('./assets/fonts/Roboto-Bold.ttf'),
      },
      'Roboto-Regular': {
        uri: require('./assets/fonts/Roboto-Regular.ttf'),
      },
    });
  };

  const handleLoadingError = (error) => {
    console.warn(error);
  };

  const handleFinishLoading = () => {
    setLoadedAssets(true);
  };

  if (!loadedAssets) {
    return (
      <AppLoading
        startAsync={loadAssets}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
