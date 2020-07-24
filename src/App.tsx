import React from 'react';
import { Reader } from './components/Reader';
import { Header } from './components/Header';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App} style={{ width: '100%' }}>
      <Header />
      <div className={classes.body}>
        <h1>QR Code Generator</h1>
        <Reader />
      </div>
    </div>
  );
}

export default App;
