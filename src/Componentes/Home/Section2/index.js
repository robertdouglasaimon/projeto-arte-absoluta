import './Section2.css';
import Foto4 from './img/Foto 4.png' 
import Foto5 from './img/Foto 5.png'
import Seta from './img/Component1.png' 
import { Link } from 'react-router-dom'; 
import React from 'react';

const Section2 = (props) => {
    return (
    <div className='container'>
        <section className='section'> 

            <div className='d2'>   
                <img src={Foto5} alt='Foto nº 5 do site' className='Fotos'/>

                <img src={Foto4} alt='Foto nº 4 do site' className='Fotos'/>         
            </div>

            <div className='d1'>
                <h1>Conheça a Visão por Trás da Arte</h1>
                <h2>Rascunhos e Processos Criativos</h2>

                <p>
                    Do primeiro traço ao acabamento final, cada detalhe é pensado<br></br> 
                    para capturar a essência da ideia original.
                </p>

                <p>
                    Exploro diferentes materiais e técnicas, desde o lápis que desenha<br></br> as primeiras linhas até a caneta que define os contornos.
                </p>

                <Link to="/about">
                    <button className='custom-button'>
                            <p>Saiba mais</p>
                            <span className='Seta'>
                                <img src={Seta} alt='Seta do botão' />
                            </span>
                    </button>
                </Link>       
            </div>
        </section>
    </div>
    )
};

export default Section2;