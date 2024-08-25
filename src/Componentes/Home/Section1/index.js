import './Section1.css';
import Foto1 from './img/Foto 1.png';
import Foto2 from './img/Foto 2 .png';
import Foto3 from './img/Foto 3.png';
import Seta from './img/Component1.png';

const Section1 = (props) => {
    return (
        <main>
            <section className='section1'>
                <div className='container'>
                    <div className='box'>
                        <h1 className='multiline-text'>
                            Bem-vindo à<br />
                            Arte Absoluta<br />
                        </h1>
                        <h2>
                            Mergulhe em um universo onde a criatividade <br />
                            não tem limites e a arte ganha vida de formas surpreendentes.
                        </h2>
                        <a href='https://www.youtube.com/watch?v=dEk0sV5G8fc' target='__blank'>
                            <button className='custom-button'>
                                <p>Saiba mais</p>
                                <span className='Seta'>
                                    <img src={Seta} alt='Seta do botão' />
                                </span>
                            </button>
                        </a>
                    </div>

                    <div className='image-container'>
                        <img src={Foto1} alt='Foto1' className='Foto1' />
                        <div style={{display: 'flex'}} className='fotos'>
                            <img src={Foto2} alt='Foto2' className='Foto2' />
                            <img src={Foto3} alt='Foto3' className='Foto3' />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Section1;
