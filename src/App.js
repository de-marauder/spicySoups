import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Site from './containers/Site/Site';
import store from './redux/store/store';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Site />
      </Provider>
    </BrowserRouter>

  );
}

export default App;
