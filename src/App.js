import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCxyg04w-KN68pXElIJ14lm4Gd-wEQOgZ0',
      authDomain: 'manager-51c3a.firebaseapp.com',
      projectId: 'manager-51c3a',
      storageBucket: 'manager-51c3a.appspot.com',
      messagingSenderId: '835904616525',
      appId: '1:835904616525:web:066cdf6ce9fb4c9c138404',
    };

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Gotcha Koch!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
