import React from 'react';
// import foto from './foto.jpg';
// import github from './github-brands.svg';
// import linkedin from './linkedin-brands.svg';
import './Perfil.css';

export const Perfil = () => {
        return (
            <div className = "info-box " >
              <h1>Antonella Zacagnino</h1>
              <hr />
              <h4>Frontend Developer</h4>
              <div className='datos'>
                <p><b>Fecha de nacimiento</b> <span>24 / 08 / 1993</span></p>
                <p><b>Domicilio</b> <span>CABA, Buenos Aires, Argentina</span></p>
              </div>
              <div>
                <p className='about-me'>
                  Mi principal objetivo es continuar desarrollándome profesionalmente, aumentar mis herramientas a la hora de trabajar y poder superar metas y objetivos tantos personales como profesionales.
                </p>
              </div>
            </div>
        )
}
