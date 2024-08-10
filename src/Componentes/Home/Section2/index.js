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
                <h1>Titulo top para algo :D</h1>
                <h2>
                    Aqui eu faço o bagulho <br></br>
                acontecer!
                </h2>
                <p>
                    Rascunhos,  processos criativos<br></br>
                    Os lapis que tu usa, os tipos de borracha,<br></br>
                    tipos de folhas, tipos de canetão, enfim<br></br> 
                    caralho!
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