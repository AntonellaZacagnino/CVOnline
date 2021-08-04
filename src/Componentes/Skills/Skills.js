import React from 'react';
import './Skills.css';
import {skills1, skills2, idiomas} from '../../data/skills.json'

export const Skills = () => {
        return ( 
            <div className = "info-box " >
                <div className='titulo'>
                    <div className='cubo'>
                        <div className="cara1"></div>
                        <div className="cara2"></div>
                        <div className="cara3">
                            <h2>Skills</h2>
                        </div>
                    </div>
                </div>
                <div className='skills'>
                    <ul>
                        {skills1.map(s => <li key={s}> {s} </li>)}
                    </ul>
                    <ul>
                        {skills2.map(s => <li key={s}> {s} </li>)}
                    </ul>
                </div>
                <div style={{display:'inline-flex'}}>
                    <h3>Idiomas</h3>
                </div>
                <div className='idiomas'>
                    <ul>
                        {idiomas.map(i => <li key={i}> {i} </li>)}
                    </ul>
                </div>
            </div>
        )
}