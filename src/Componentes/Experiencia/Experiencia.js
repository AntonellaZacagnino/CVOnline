import React from 'react';
import './Experiencia.css';

export const Experiencia = () => {
        return (
            <div className = "info-box " style={{marginTop: 8 + 'vh'}} >
                <div className="item">
                    <div className="banner">
                        <h2>Servicios Computables S.A.</h2>
                        <span>| Mayo 2019 - Presente |</span>
                    </div>
                    <div className='descripcion'>
                        <p>
                        Desarrollo de aplicaciòn web realizado en PHP (Symfony) para el Backend, implementando jquery y bootstrap, maquetaciòn web en HTML y SASS e implementación de Vue.js para el frontend. Manejo de MySQL
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="banner">
                        <h2>Proyecto integrador desarrollado en el marco de Digital House</h2>
                        <span>| Octubre 2018 - Mayo 2019 |</span>
                    </div>
                    <div className='descripcion'>
                        <p>
                            Desarrollo de aplicación web (red social) utilizando HTML, CSS y Javascript. Backend y la API REST desarrollado en PHP, con Laravel como framework de apoyo utilizando buenas prácticas MVC. Manejo de MySQL.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
