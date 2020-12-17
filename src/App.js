import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      const firebaseConfig = {
        apiKey: 'AIzaSyCxyg04w-KN68pXElIJ14lm4Gd-wEQOgZ0',
        authDomain: 'manager-51c3a.firebaseapp.com',
        projectId: 'manager-51c3a',
        storageBucket: 'manager-51c3a.appspot.com',
        messagingSenderId: '835904616525',
        appId: '1:835904616525:web:066cdf6ce9fb4c9c138404',
      };

      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app();
    }
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
