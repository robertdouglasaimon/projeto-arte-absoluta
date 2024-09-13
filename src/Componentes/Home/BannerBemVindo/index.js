import './BannerBemVindo.css' ;
import BannerBemVindo from './img/Bem_vindo.png';

const Espacamento = (props) => {
    return (
        <div className='bannerBemVindo'>
           <img src={BannerBemVindo} alt="Bem Vindo à Arte Absoluta!" className="bannerFoto  neon-photo-effect img-fluid"/>
        </div>
    )
}

export default Espacamento;