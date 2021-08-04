import React from 'react';
import './Contacto.css';

export const Contacto = () => {
    return (
        <div className = "info-box " >
                <div className='titulo'>
                    <div className='cubo'>
                        <div className="cara1"></div>
                        <div className="cara2"></div>
                        <div className="cara3">
                            <h2>Contacto</h2>
                        </div>
                    </div>
                </div>
                <div className='datos'>
                    <p><b>Telefono</b> <span>011 15 30402973</span></p>
                    <p><b>Email</b> <span>antonellazacagnino@gmail.com</span></p>
                </div>
                <div className='redes'>
                    <a href='https://github.com/AntonellaZacagnino'>
                        <img src='images/github.svg' alt='github' />
                    </a>
                    <a href='https://www.linkedin.com/in/antonella-zacagnino/'>
                        <img src='images/linkedin.svg' alt='linkedin' />
                    </a>
                </div>
            </div> 
    )
}
