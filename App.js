import React from 'react';
import Navigator from './app/components/NavBar'

// Redux path
import { Provider } from 'react-redux'
import store from './app/Redux/store'


export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
   

    </Provider>
  );
}


