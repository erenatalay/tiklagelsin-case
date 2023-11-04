import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screen/splash';
import { Provider } from 'react-redux';
import store from './src/store';
import ErrorMessage from './src/components/error-message/ErrorMessage';
import { RootSiblingParent } from 'react-native-root-siblings';

const App = () => {
  return (
    <Provider
      store={store}
    >
      <NavigationContainer>
        <RootSiblingParent>
          <Splash />
          <ErrorMessage />
        </RootSiblingParent>
      </NavigationContainer>
    </Provider>

  );
}


export default App;