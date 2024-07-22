import './Section1.css'
import Foto1 from '../img/Foto 1.png'
import Foto2 from '../img/Foto 2.png'
import Foto3 from '../img/Foto 3.png'
import Seta from '../img/Component1.png'

const Section1 = (props) => {
    return (
        <div className='container'>
            <div className='box'>
                <h1 className='multiline-text'>
                    Processo<br></br>
                    criativo<br></br>
                    ta indo!<br></br>
                    Vambora<br></br>
                </h1>

                <h2>
                    Sua criatividade, sua inspiração <br></br>
                    Qualquer porra de historia, seja livre!
                </h2>

                <button className='botao'>
                    Saiba mais 
                        <span className='Seta'>
                            <img src={Seta} alt='Seta do botão'/>
                        </span>
                </button>
                

            </div>
            <div>
                <img src={Foto1} alt='Foto1' className='Foto1'/>
                <img src={Foto2} alt='Foto1' className='Foto2'/>
                <img src={Foto3} alt='Foto1' className='Foto3'/>
            </div>
        </div>
    )
};

export default Section1