import './SobreMim2.css'
import Foto1SobreMim from './img/photo_2024-07-31_11-28-31.jpg'
import Foto2SobreMim from './img/photo_2024-07-31_20-50-26.jpg'

const SobreMim2 = (props) => {
    return (
        <div>
            <section className='SectionSobreMim1'>
                <article className='Artigo1'>
                    <div className='FotosSobreMim1'>
                        <img src={Foto1SobreMim} alt='Foto de Diego 1' className='Foto1SobreMim1'/>
                    </div>

                    <div className='TextosSobreMim1'>
                        <h2>Olá, eu sou o Diego!</h2>
                        <p>
                            Oi, tudo bem? Eu sou Desenhista, tatuador e faço<br></br>  
                            arte demarcenaria
                            e estou feliz de te ver por aqui.
                        </p>

                        <p>
                            Minha história com programação começou no <br></br>Instituto Federal do Piauí (IFPI), quando fiz o ensino<br></br> médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias <br></br>linguagens, como PHP, Python, Java, mas sem<br></br> aprofundar muito em cada uma delas. Eu gostava <br></br> muito de estudar programação, mas na época não <br></br> fazia ideia de que trabalharia com isso hoje.
                        </p>
                        
                        <p>
                            No ensino superior, escolhi cursar Engenharia Elétrica <br></br>na Universidade Federal do Piauí (UFPI). Lá eu <br></br> consegui entrar no PET (Programa de Educação <br></br> Tutorial), um grupo acadêmico que contribui de <br></br> diversas formas para o curso. Lá eu tive a <br></br> oportunidade de estudar desenvolvimento web para <br></br>ser um dos mantenedores do site deles. 
                        </p>
                    </div>
                </article>

                <article className='Artigo2'>
                        <div className='TextosSobreMim2'>
                            <h2>Transformação e empenho</h2>
                            <p>
                                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
                            </p>
                            <p>
                                E foi enquanto eu estava no PET que decidi procurar um estágio em desenvolvimento web. Eu encontrei uma vaga na Alura para o Scuba Team e percebi que ela aliava duas paixões minhas: programação e educação. Para minha felicidade, fui escolhido para fazer parte do time.
                            </p>
                            <p>
                                Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!
                            </p>
                        </div>

                    <div className='FotosSobreMim2 reverse'>
                        <img src={Foto2SobreMim} alt='Foto de Diego 2' className='Foto2SobreMim2'/>
                    </div>
                </article>
            </section>
        </div>
    )
};
export default SobreMim2;