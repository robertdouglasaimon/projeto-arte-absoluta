import './Section3.css'
import imagem1 from '../Section3/img/image 7.png'
import imagem2 from '../Section3/img/image 6.png'
import imagem3 from '../Section3/img/image 5.png'

const Section3 = (props) => {
    return (
        <div className='container'>
            <section className='section3'>
                <h1>Porque me escolher</h1>

                <div className='descricao'>
                    <span className='espacoEntreSpan'>
                        <img src={imagem1} alt='Imagem de um quadro de pintura' className='image1'/>
                        <h3>Desenho profissional</h3>
                        <p>
                            Transformo sua visão em arte com precisão 
                            e habilidade. <br></br> Uma nova arte criando obras<br></br>que capturam a essência do seu pedido.
                        </p>
                    </span>

                    <span className='espacoEntreSpan'>
                        <img src={imagem2} alt='Imagem de um homem desenhando em uma mesa' className='image2'/>
                        <h3>Escopo e Técnica Refinados</h3>
                        <p>
                            Cada projeto é cuidadosamente planejado e executado <br></br> 
                            com as melhores ferramentas,<br></br> garantindo um trabalho que supera expectativas.
                        </p>
                    </span>

                    <span className='espacoEntreSpan'>
                        <img src={imagem3} alt='imagem de um lapis de desenho' className='image3'/>
                        <h3>Materiais de Qualidade, Arte Duradoura</h3>
                        <p>
                            Utilizo apenas materiais de alta qualidade, <br></br>
                            assegurando que cada obra tenha uma durabilidade <br></br>
                            excepcional e um acabamento impecável.
                        </p>
                    </span>
                </div>
            </section>
        </div>
    )
};

export default Section3;