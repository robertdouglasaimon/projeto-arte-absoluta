import './Section5.css'
import Foto12 from '../Section5/img/Foto 12.png';
import Foto13 from '../Section5/img/Foto 13.png';
import Foto14 from '../Section5/img/Foto 14.png';

const Section5 = (props) => {
    return (
        <div className='container section5container'>
            <section className='section5'>
                <h2>Explorando Novos Horizontes</h2>
                <p>
                    A arte não tem limites. Cada nova obra é uma oportunidade de experimentar,<br></br>inovar e descobrir novos caminhos criativos.<br></br>
                    <br/>
                    Aqui, mostro um pouco das minhas explorações artísticas mais recentes, <br/>onde a imaginação encontra a técnica.
                </p>

                <div className="fotosSessao5"> 
                    <img src={Foto12} alt='Foto12' className='Foto12'/>
                    <img src={Foto13} alt='Foto13' className='Foto13'/>
                    <img src={Foto14} alt='Foto14' className='Foto14'/>
                </div>
            </section>
        </div>
    )
}

export default Section5;