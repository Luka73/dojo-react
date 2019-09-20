import React from 'react';
import './App.css';

import { DojoButton } from './atoms/button'
import MainTemplate from './templates/main'

function App() {
  return (
    <div className="App">

        <MainTemplate/>
        <DojoButton>Teste</DojoButton>

    </div>
  );
}

export default App;
