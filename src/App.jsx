import React from 'react';
import {Foto} from './Componentes/Foto/Foto';
import {Perfil} from './Componentes/Perfil/Perfil.js'
import {Formacion} from './Componentes/Formacion/Formacion.js'
import {Experiencia} from './Componentes/Experiencia/Experiencia.js'
import {Skills} from './Componentes/Skills/Skills.js'
import {Contacto} from './Componentes/Contacto/Contacto.js'
import './App.css';
import {Nav} from './Componentes/Nav/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
    
    return (
      <div>
        <div className='background'><img src='/images/background.jpg' /></div>
        <div className="App" >
            <BrowserRouter>
              <Nav />
              <Foto />
              <div className="container">
                <Switch>
                  <Route path='/perfil'>
                    <Perfil />
                  </Route>
                  <Route path='/experiencia'>
                    <Experiencia />
                  </Route>
                  <Route path='/formacion'>
                    <Formacion />
                  </Route>
                  <Route path='/skills'>
                    <Skills />
                  </Route>
                  <Route path='/contacto'>
                    <Contacto />
                  </Route>
                </Switch>
              </div>
            </BrowserRouter>
        </div>
      </div>
    );
}

export default App;
