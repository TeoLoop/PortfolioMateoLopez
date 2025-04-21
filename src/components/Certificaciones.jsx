import React, { useState } from 'react';
import './Certificaciones.css';

// Importación de la imagen
import desarrolloWebImage from '../assets/desarrolloWeb.png';
import desarrolloBD from '../assets/desarrolloBD.png';

// Array de certificaciones (usando la imagen importada)
const certificaciones = [
  {
    titulo: 'Desarrollo Web',
    lugar: 'Digital House',
    fecha: 'Abril 2023',
    link: 'https://certificado-react.com',
    imagen: desarrolloWebImage,  // Usando la imagen importada
  },
  {
    titulo: 'Desarrollador de Base de Datos',
    lugar: 'Linkedin Learning',
    fecha: 'Abril 2025',
    link: 'https://certiprof.com/certificado',
    imagen: desarrolloBD,  // Usando la imagen importada
  },
  // Puedes agregar más certificaciones y usar la imagen importada aquí
];

export const Certificaciones = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Abre el modal
  const openModal = (img) => {
    setSelectedImage(img);
    setModalVisible(true);
  };

  // Cierra el modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <section className="certificaciones">
      <h2 className="section-title">Certificaciones</h2>
      <div className="certificaciones-container">
        {certificaciones.map((cert, index) => (
          <div className="certificacion-card" key={index}>
            <div className="card-content">
              <div className="card-image" onClick={() => openModal(cert.imagen)}>
                <img src={cert.imagen} alt={cert.titulo} />
              </div>
              <div className="card-info">
                <h3>{cert.titulo}</h3>
                <span className="place">{cert.lugar}</span>
                <span className="date">{cert.fecha}</span>
                <a href={cert.link} target="_blank" rel="noreferrer" className="ver-certificado">
                  Ver certificado
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de imagen */}
      {modalVisible && selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage} alt="Imagen grande" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};
