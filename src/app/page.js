"use client";
import React from 'react';
import './globals.css';
import Empresas from '@/componentes/empresas';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <div className="empresas-container">
        <Empresas />
      </div>
    </div>
  );
}

export default App;