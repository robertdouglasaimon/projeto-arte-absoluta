import React from 'react';
import CarouselBS4 from '../Carousel/index'
import Carousel1 from '../../Images/carousel1.jpg';
import Carousel2 from '../../Images/carousel2.jpg';
import Carousel3 from '../../Images/carousel3.jpg';

import Carousel10 from '../../Images/carousel10.jpg';
import Carousel11 from '../../Images/carousel11.jpg';
import Carousel12 from '../../Images/carousel12.jpg';

import Carousel20 from '../../Images/carousel20.jpg';
import Carousel21 from '../../Images/carousel21.jpg';
import Carousel22 from '../../Images/carousel22.jpg';

const ArtsSection2 = () => {
  const animeImages = [
    { src: Carousel1, alt: 'First slide', label: 'Anime Slide 1', caption: 'First anime image description' },
    { src: Carousel2, alt: 'Second slide', label: 'Anime Slide 2', caption: 'Second anime image description' },
    { src: Carousel3, alt: 'Third slide', label: 'Anime Slide 3', caption: 'Third anime image description' }
  ];

  const celebridadesImages = [
    { src: Carousel10, alt: 'First slide', label: 'Celebridade Slide 1', caption: 'First Celebridade image description' },
    { src: Carousel11, alt: 'Second slide', label: 'Celebridade Slide 2', caption: 'Second Celebridade image description' },
    { src: Carousel12, alt: 'Third slide', label: 'Celebridade Slide 3', caption: 'Third Celebridade image description' }
  ];

  const animaisImages = [
    { src: Carousel20, alt: 'First slide', label: 'Celebridade Slide 1', caption: 'First Celebridade image description' },
    { src: Carousel21, alt: 'Second slide', label: 'Celebridade Slide 2', caption: 'Second Celebridade image description' },
    { src: Carousel22, alt: 'Third slide', label: 'Celebridade Slide 3', caption: 'Third Celebridade image description' }
  ];

  return (
    <div>
      <section>
      {/* Reutilizando o componente para a galeria de fotos*/}
        <article>
          {/*Sessão de animes*/}
          <CarouselBS4
            title="Animes"
            description="Galeria de desenhos inspirados em animes"
            images={animeImages}
            carouselId="carouselAnime"
          />
        </article>

        <article>
          <CarouselBS4 
            title="Famosos"
            description="Galeria de desenhos inspirados em celebridades"
            images={celebridadesImages}
            carouselId="carouselCelebridades"
          />
        </article>

        <article>
          <CarouselBS4 
            title="Animais"
            description="Galeria de desenhos inspirados em animais."
            images={animaisImages}
            carouselId="carouselAnimais"
          />
        </article>

      </section> 
    </div>
  );
}

export default ArtsSection2;
