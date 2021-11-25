import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseContext } from './Store/FirebaseContext';
import Context from './Store/FirebaseContext'
import firebase from './firebase/Config'

ReactDOM.render(
  <FirebaseContext.Provider value = {{firebase}} >
  <Context>
    <App />
    </Context>
    </FirebaseContext.Provider>
  ,
  document.getElementById('root')
);

