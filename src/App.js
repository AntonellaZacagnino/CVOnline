import React from 'react';
import logo from './logo.svg';
import Separador from './Componentes/Separador.js';
import SobreMi from './Secciones/SobreMi/SobreMi.js'
import Perfil from './Secciones/Perfil/Perfil.js'
import './App.css';
import './bootstrap.min.css'

function App() {
    const secciones = [
        { descripcion: 'Sobre Mí', url: '#sobreMi' },
        { descripcion: 'Perfil', url: '#perfil' },
        { descripcion: 'Skills', url: '#skills' },
        { descripcion: 'Formación', url: '#formacion' },
        { descripcion: 'Experiencia profesional', url: '#exp' },
        { descripcion: 'Otras Experiencias', url: '#otrasExp' }
    ];
    const listSecciones = secciones.map((seccion) =>
        <li>
          <a href = { seccion.url } > { seccion.descripcion } < /a>
        </li>
    );
    return (
      <div className="App" >
        <header className="App-header">
          <div className="banner p-5">
            <div className='row justify-content-center'>
              <img src={logo} className="App-logo mr-3" alt="logo" />
              <h1 className="align-self-center"> Antonella Zacagnino </h1>
            </div>
            <div>
              <h4> Frontend Developer </h4>
            </div>
            <nav>
              <ul className="pt-4">{listSecciones}</ul>
            </nav>
          </div>
          <div className="w-100">
            <Separador />
            <SobreMi />
            <Separador />
            <Perfil />
          </div>
          <p> Edit < code > src / App.js < /code> and save to reload.</p >
          <a className = "App-link" href = "https://reactjs.org" target = "_blank" rel = "noopener noreferrer" > Learn React < /a>
        </header>
      </div>
    );
}

export default App;
