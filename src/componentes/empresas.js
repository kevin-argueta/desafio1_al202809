"use client";
import React from 'react';
import EmpresaItem from './empresaItem';
import data from './empresas.json';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Empresas = () => {
  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4 text-info">{data.descripcion}</h1>
      <div className="row">
        {data.empresas.map((empresa, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
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
