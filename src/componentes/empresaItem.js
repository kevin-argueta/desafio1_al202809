"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
const EmpresaItem = ({ titulo, descripcion, caracteristicas, imagen }) => {
  return (
    <div className="card mb-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imagen} className="img-fluid rounded-start" alt={titulo} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <p className="card-text"><strong>Características:</strong> {caracteristicas}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpresaItem;
