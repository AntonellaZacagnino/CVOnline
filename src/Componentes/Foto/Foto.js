import React from 'react';
import './Foto.css';

export const Foto = () => {
    // const secciones = [
    //     { descripcion: 'Perfil', url: '#perfil' },
    //     { descripcion: 'Experiencia', url: '#experiencia' },
    //     { descripcion: 'Formación', url: '#formacion' },
    //     { descripcion: 'Skills', url: '#skills' },
    //     { descripcion: 'Contacto', url: '#contacto' }
    // ];
    // const listSecciones = secciones.map((seccion) =>
    //     <li key={seccion.url}>
    //       <a href = { seccion.url } > { seccion.descripcion } </a>
    //     </li>
    // );

    return (
            <div className="foto-container">
              <img src='/images/foto.jpg' className="foto" alt="logo" />
            </div>
    )
}