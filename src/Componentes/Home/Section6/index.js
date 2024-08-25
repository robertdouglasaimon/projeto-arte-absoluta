import './Section6.css';
import Foto15 from './img/Foto 15.png'
import Foto16 from './img/Foto 16.png';
import Foto17 from './img/Foto 17.png';
import Foto18 from './img/Foto 18.png';
import Foto19 from './img/Foto 19.png';
import Foto20 from './img/Foto 20.png';
import Foto21 from './img/Foto 21.png';
import Foto22 from './img/Foto 22.png';
import Foto23 from './img/Foto 23.png';

const Section6 = (props) => {
    return (
        <div className='container containerSection6'>
            <section className='section6'>
                <h1>Uma amostra da criatividade</h1>  
                <h2>
                    Explore um portfólio diversificado que captura a essência da minha arte.<br/> 
                    De animes e celebridades a animais e objetos
                    cotidianos, cada desenho<br/>  
                    reflete a paixão e a habilidade que coloco em cada projeto.
                    <br/>
                    <br/>
                    Navegue pelas imagens abaixo e veja a versatilidade do meu trabalho. ✌🏼
                </h2>  
                <div className="fotoSecao6">
                    <img src={Foto15} alt='Foto15'/>
                    <img src={Foto16} alt='Foto16'/>
                    <img src={Foto17} alt='Foto17'/>
                    <img src={Foto18} alt='Foto18'/>
                    <img src={Foto19} alt='Foto19'/>
                    <img src={Foto20} alt='Foto20'/>
                    <img src={Foto21} alt='Foto21'/>
                    <img src={Foto22} alt='Foto22'/>
                    <img src={Foto23} alt='Foto23'/>
                </div>
            </section>
        </div>
    )
}

export default Section6;