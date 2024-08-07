import './ArtsSection2.css'
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FotoArte1 from './img/Rectangle 29.png'
import FotoArte2 from './img/Rectangle 30.png'
import FotoArte3 from './img/Rectangle 31.png'
import FotoArte4 from './img/Rectangle 32.png'


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true, // Opcional, se quiser esconder as setas
  centerMode: false, // Ajuste conforme necessário
  centerPadding: '0px', // Remove o padding ao redor do slide centralizado
};


const ArtsSection2 = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <div className='textoArtsSection2 container'>
        <h1>Desenho de Animais</h1>
        <p>Descrição pequena dessa parte</p>
      </div>

      <div className="carousel-container">
        <Slider {...settings}>
            <div className="carousel-slide">
              <img src={FotoArte1} alt="Arte 1" />
            </div>
            <div className="carousel-slide">
              <img src={FotoArte2} alt="Arte 2" />
            </div>
            <div className="carousel-slide">
              <img src={FotoArte3} alt="Arte 3" />
            </div>
            <div className="carousel-slide">
              <img src={FotoArte4} alt="Arte 4" />
            </div>
        </Slider>
      </div>

    </div>
  );
}

export default ArtsSection2;
