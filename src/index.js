import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store,persistor} from './Store/store';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.render(
<Provider store={store} > 
<PersistGate loading={null} persistor={persistor}>
<App />
</PersistGate>
</Provider>,
  document.getElementById('root')
);