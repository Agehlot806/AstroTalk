import {View, Text} from 'react-native';
import React from 'react';
import Routes from './src/navigation/Routes';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
