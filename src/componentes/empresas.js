"use client";
import React, { useState } from 'react';
import EmpresaItem from './empresaItem';
import data from './empresas.json';

const Empresas = () => {
  return (
    <div className="container">
      <h1 className="my-4">{data.descripcion}</h1>
      <div className="row">
        {data.empresas.map((empresa, index) => (
          <div className="col-md-6" key={index}>
            <EmpresaItem
              titulo={empresa.titulo}
              descripcion={empresa.descripcion}
              caracteristicas={empresa.caracteristicas}
              imagen={empresa.imagen}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Empresas;
