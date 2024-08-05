import './Section5.css'
import Foto12 from '../Section5/img/Foto 12.png';
import Foto13 from '../Section5/img/Foto 13.png';
import Foto14 from '../Section5/img/Foto 14.png';

const Section5 = (props) => {
    return (
        <div className='container section5container'>
            <section className='section5'>
                <h2>Um titulo para alguma sessão</h2>
                <p>
                    Alguma descrição para essa sessão, qualquer porra<br></br>
                    para testar o espaço e afins :D
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