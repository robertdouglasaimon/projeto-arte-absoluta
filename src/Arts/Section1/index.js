import './ArtsSection1.css';
import BannerArtsSection1 from './img/BannerArtsSection1.png'

const ArtsSection1 = (props) => {
    return (
        <div className='container containerArts1'>
            <section className='sectionArts1'>
                <h1>Titulo para a <br></br>sessão de arte</h1>
                <p>Sua criatividade, sua inspiração <br></br>
                Qualquer porra de historia, seja livre!.</p>
         
                <img src={BannerArtsSection1} alt='Banner da sessão um.' className="bannerArtsSection1 img-fluid"/>
            </section>
        </div>
    )
}

export default ArtsSection1