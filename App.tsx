import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/screen/splash';
import { Provider } from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider
    store={store}
    >
      <NavigationContainer>
        <Splash />
      </NavigationContainer>
    </Provider>

  );
}


export default App;