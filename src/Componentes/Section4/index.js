import './Section4.css';
import retanguloContador from '../img/Rectangle 4.png'
import barraDaCaixaDeFotos from '../img/Rectangle 6.png'
import circuloVermelho from '../img/Ellipse 5.png'
import circuloAmarelo from '../img/Ellipse 4.png'
import circuloVerde from '../img/Ellipse 3.png'
import Foto7 from '../img/Foto 7.png'
import Foto8 from '../img/Foto 8.png'
import Foto9 from '../img/Foto 9.png'
import Foto10 from '../img/Foto 10.png'
import Foto11 from '../img/Foto 11.png'

const Section4 = (props) => {
    return (
        <div className='container'>
            <section className='section4'>

                <div className='quadroDeFoto'>
                    <div class="barraContainer">
                        <img src={barraDaCaixaDeFotos} alt='Barra da caixa de fotos'/>
                        <img src={circuloVermelho} alt='Circulo vermelho da barra da caixa de fotos'className='circuloVermelho'/>

                        <img src={circuloAmarelo} alt='Circulo amarelo da barra da caixa de fotos'className='circuloAmarelo'/>

                        <img src={circuloVerde} alt='Circulo verde da barra da caixa de fotos'className='circuloVerde'/>
                    </div>

                    {/*FOTOS DO QUADRO ⬇️*/}
                    <div className='fotosDaCaixa'>
                        <img src={Foto7} alt='Foto7' className='Foto7'/>
                        <img src={Foto8} alt='Foto8' className='Foto8'/>
                        <img src={Foto9} alt='Foto9' className='Foto9'/>
                        <img src={Foto10} alt='Foto10' className='Foto10'/>
                        <img src={Foto11} alt='Foto11' className='Foto11'/>
                    </div>
                </div>

                <div className='textoSection4'>
                    <h1>Experimentando e <br></br>
                        personalizando.</h1>
                    <p>
                        Uma sequencia de teste dahora aqui para ver<br></br>
                        como se comporta essa parte, podia usar lorem,<br></br>
                        mas vou escrever lorota mesmo :)
                    </p>
                </div>

                <div className='contador'>
                    <img src={retanguloContador} alt='Retangulo branco onde fica os contadores'/>
                </div>
            </section>
        </div>
    )
}

export default Section4;