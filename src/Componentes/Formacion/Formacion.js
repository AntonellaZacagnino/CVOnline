import React from 'react';
import './Formacion.css';

export const Formacion = () => {
    return (
        <div className = "info-box " style={{marginTop:15 +'vh'}}>
                <div className="item">
                    <div className="banner">
                        <h2>CoderHouse</h2>
                        <span>| Junio 2021 - Julio 2021|</span>
                    </div>
                    <div className='descripcion'>
                        <p>
                            Curso de React.js
                            Creación de una aplicación con React.js y Firebase.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="banner">
                        <h2>Digital House</h2>
                        <span>| Noviembre 2018 -  Mayo 2019 |</span>
                    </div>
                    <div className='descripcion'>
                        <p>
                            Curso de Programación Fullstack 
                            Creación de una aplicación con PHP (Laravel), maquetación básica con HTML y CSS, MySQL.
                        </p>
                    </div>
                </div>
            </div>
        ) 
}
