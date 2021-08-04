import React, { useState } from 'react';
import './Nav.css';
import {NavLink} from 'react-router-dom';

export const Nav = () => {
    const secciones = [
        { id: 'perfil', descripcion: 'Perfil'},
        { id: 'experiencia', descripcion: 'Experiencia'},
        { id: 'formacion', descripcion: 'Formación'},
        { id: 'skills', descripcion: 'Skills'},
        { id: 'contacto', descripcion: 'Contacto' }
    ];
    const [isActive, setIsActive] = useState();

    const handleActive = (seccion) => {
        return setIsActive(seccion);
    } 
    return (
        <div className='nav'>
            <div className='deco'></div>
            <div className='puntas-deco deco-top'></div>
            <div className='puntas-deco deco-bottom'></div>
            <ul className='tab-list'>
                {secciones.map((seccion) =>
                    <li className={ isActive == seccion.descripcion ? 'tab active': 'tab' } key={seccion.id} onClick={() => handleActive(seccion.descripcion)} >
                        <NavLink to={`/${seccion.id}`}> {seccion.descripcion} </NavLink>
                    </li>
                )}
            </ul>
        </div>
    )
}