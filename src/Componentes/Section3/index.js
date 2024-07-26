import './Section3.css'
import imagem1 from '../img/image 7.png'
import imagem2 from '../img/image 6.png'
import imagem3 from '../img/image 5.png'

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
                            Seu pedido e minha habilidade<br></br> 
                            uma nova arte
                        </p>
                    </span>

                    <span className='espacoEntreSpan'>
                        <img src={imagem2} alt='Imagem de um homem desenhando em uma mesa' className='image2'/>
                        <h3>Escopo e trabalhos certeiros</h3>
                        <p>
                            Trabalho pensado utilizando <br></br> 
                            várias ferramentas <br></br> 
                            profissionais
                        </p>
                    </span>

                    <span className='espacoEntreSpan'>
                        <img src={imagem3} alt='imagem de um lapis de desenho' className='image3'/>
                        <h3>Materiais de qualidade</h3>
                        <p>
                            Desenhos feitos com <br></br>
                            materiais de alta qualidade
                        </p>
                    </span>
                </div>
            </section>
        </div>
    )
};

export default Section3;