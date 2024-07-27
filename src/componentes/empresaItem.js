"use client"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/app/page.module.css';
const EmpresaItem = ({ titulo, descripcion, caracteristicas, imagen }) => {
  return (    
    <div className="card mb-4 shadow-sm rounded card-custom">
    <div className="row g-0">
      <div className="col-md-4">
        <img src={imagen} className="img-fluid rounded-start" alt={titulo} />
      </div>
      <div className="col-md-8">
        <div className="card-body card-body-custom">
          <h5 className="card-title card-title-custom">{titulo}</h5>
          <p className="card-text card-text-custom">{descripcion}</p>
          <p className="card-text mt-2 card-text-features">
            <strong>Características:</strong> {caracteristicas}
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default EmpresaItem;
