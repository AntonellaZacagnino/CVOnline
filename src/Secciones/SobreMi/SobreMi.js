import React from 'react';
import foto from './foto.jpg';
import github from './github-brands.svg';
import linkedin from './linkedin-brands.svg';
import './SobreMi.css';

class SobreMi extends React.Component {
    render() {
        return <div className = "info-box mt-5" id = '#sobreMi'>
        <img src={foto} className='foto-perfil' />
          <div className='col-md-8'>
            <ul className='datos-personales'>
              <li className='pink'> Email: antonellazacagnino@gmail.com </li>
              <li className='violet'> Celular de contacto: 011 15 3040-2973 </li>
              <li className='pink'> Domicilio: CABA, Buenos Aires, Argentina </li>
              <li className='violet'> Nacionalidad: Argentina </li>
              <li className='pink'> Fecha de nacimiento: 24/08/1993 </li>
              <a href='https://github.com/AntonellaZacagnino'>< img src={github}/> </a>
              <a href='https://www.linkedin.com/in/antonella-zacagnino'> <img src={linkedin}/> </a>
            </ul>
          </div>
        </div> ;
    }
}

export default SobreMi;
