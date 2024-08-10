import './SobreMim1.css'
import BannerSobreMim from './img/Rectangle 17.png'

const SobreMim1 = (props) => {
    return (
        <div className='BannerSobreMim containerBanner'>
            <img src={BannerSobreMim} alt='Banner de Sobre Mim'/>
            <h1>Sobre mim</h1>
        </div>
    )
};

export default SobreMim1;