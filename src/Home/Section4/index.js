import React, { useState } from 'react';
import './Section4.css';
import retanguloContador from '../Section4/img/Rectangle 4.png';
import barraDaCaixaDeFotos from '../Section4/img/Rectangle 6.png';
import circuloVermelho from '../Section4/img/Ellipse 5.png';
import circuloAmarelo from '../Section4/img/Ellipse 4.png';
import circuloVerde from '../Section4/img/Ellipse 3.png';
import Foto7 from '../Section4/img/Foto 7.png';
import Foto8 from '../Section4/img/Foto 8.png';
import Foto9 from '../Section4/img/Foto 9.png';
import Foto10 from '../Section4/img/Foto 10.png';
import Foto11 from '../Section4/img/Foto 11.png';

const Section4 = (props) => {
    // Estado para os contadores (Contador de projetos da div "contador")

    /* eslint-disable */ /* <-- Comando para desligar os warnings no terminal das váriaveis que AINDA não estão sendo usadas. Esse comando é feito como um comentario mesmo, do jeito que está ali. NÃO APAGAR, pelo menos enquanto NÃO ESTEJA USANDO as váriaveis abaixo. :)*/

    const [quantidadeProjetos, setQuantidadeProjetos] = useState(50);
    const [projetosAndamento, setProjetosAndamento] = useState(38);
    const [projetosCompletos, setProjetosCompletos] = useState(98);

    return (
        <div className='container'>
            <section className='section4'>

                <div className='quadroDeFoto'>
                    <div className="barraContainer">
                        <img src={barraDaCaixaDeFotos} alt='Barra da caixa de fotos' className='barraDaCaixaDeFotos'/>
                        <img src={circuloVermelho} alt='Circulo vermelho da barra da caixa de fotos' className='circuloVermelho'/>
                        <img src={circuloAmarelo} alt='Circulo amarelo da barra da caixa de fotos' className='circuloAmarelo'/>
                        <img src={circuloVerde} alt='Circulo verde da barra da caixa de fotos' className='circuloVerde'/>
                    </div>

                    <div className='fotosDaCaixa'>
                        <img src={Foto7} alt='Foto7' className='Foto7'/>
                        <img src={Foto8} alt='Foto8' className='Foto8'/>
                        <img src={Foto9} alt='Foto9' className='Foto9'/>
                        <img src={Foto10} alt='Foto10' className='Foto10'/>
                        <img src={Foto11} alt='Foto11' className='Foto11'/>
                    </div>
                </div>

                <div className='textoSection4'>
                    <h1>Experimentando e <br /> personalizando.</h1>
                    <p>
                        Uma sequencia de teste dahora aqui para ver<br />
                        como se comporta essa parte, podia usar lorem,<br />
                        mas vou escrever lorota mesmo :)
                    </p>
                </div>

                <div className='contador'>
                    <img src={retanguloContador} alt='Retangulo branco onde fica os contadores'/>

                    <div className='contadores'>
                        <div className='contador-item'>
                            <div className='count'>{quantidadeProjetos}<b>+</b></div>
                            <div className='label'>Quantidade de projetos</div>
                        </div>
                        <div className='contador-item'>
                            <div className='count'>{projetosAndamento}<b>+</b></div>
                            <div className='label'>Projetos em andamento</div>
                        </div>
                        <div className='contador-item'>
                            <div className='count'>{projetosCompletos}<b>+</b></div>
                            <div className='label'>Projetos Completos</div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
}

export default Section4;
