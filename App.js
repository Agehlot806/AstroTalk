import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Routes from './src/navigation/Routes';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import {apiCall} from './src/Utils/httpClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from 'react-native-splash-screen';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const apiUrl = 'https://api.prokerala.com/token';
  const CLIENT_ID = '5fa28111-9eb8-4b07-9553-6ad733fd9ae0';
  const CLIENT_SECRET = 'jzyr3uQYitG3ND56qhykNpH9mG3R7TkrRdFaCgGF';
  useEffect(() => {
    getApiToken();
    setTimeout(() => {
      SplashScreen.hide();
    }, 250);
  }, []);

  const getApiToken = () => {
    const data = {
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    };
    const res = apiCall('post', apiUrl, data).then(res => {
      console.log('res token', res);
      AsyncStorage.setItem('token', res.data.access_token);
    });
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
