import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import api from './services/api';

function App() {
  const [ msg, setMsg ] = useState(0);

  api.get('user').then(response => {
    const { data } = response;

    setMsg(data);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{msg}</div>
      </header>
    </div>
  );
}

export default App;
