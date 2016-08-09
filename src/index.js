import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

import Stream from './components/Stream/';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import { Provider } from 'react-redux';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById('root')
);
