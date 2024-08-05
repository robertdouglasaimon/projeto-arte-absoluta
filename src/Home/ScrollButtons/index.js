import React, { useState, useEffect } from 'react';
import './ScrollButtons.css'
import SetaParaCima from './img/Seta para cima.png'
import SetaParaBaixo from './img/Seta para baixo.png'

const ScrollButtons = () => {
  const [showTopButton, setShowTopButton] = useState(false);
  const [showBottomButton, setShowBottomButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) { // Mostra o botão para cima quando rola mais de 300px
      setShowTopButton(true);
    } else {
      setShowTopButton(false);
    }

    if (window.scrollY < document.documentElement.scrollHeight - window.innerHeight - 300) { // Mostra o botão para baixo se não estiver no fundo
      setShowBottomButton(true);
    } else {
      setShowBottomButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showTopButton && (
        <button className="scroll-button top-button" onClick={scrollToTop}>
          <img src={SetaParaCima} alt="Seta Para Cima" />
        </button>
      )}
      {showBottomButton && (
        <button className="scroll-button bottom-button" onClick={scrollToBottom}>
          <img src={SetaParaBaixo} alt="Seta Para Baixo" />
        </button>
      )}
    </>
  );
};

export default ScrollButtons;