"use client";
import React from 'react';
import './globals.css';
import Empresas from '@/componentes/empresas';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Empresas />
      </header>
    </div>
  );
}

export default App;