import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppTransition from './App_transition';
import AppDeferredValue from "./App_defered_value";
import AppUseId from "./App_use_id"
import AppSyncExternalStore from "./App_sync_external_store"
import AppInsertionEffect from "./App_insertion_effect"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<AppTransition />*/}
    {/*<AppDeferredValue />*/}
    {/*<AppUseId />*/}
    {/*<AppSyncExternalStore />*/}
    <AppInsertionEffect />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
