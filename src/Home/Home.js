import React from 'react';
import ScrollButtons from './ScrollButtons';
import Espacamento from './Espacamento';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Contato from '../Contact/Contato';
import Rodape from './Rodape';


const Home = (props) => {
  return (
    <div>
      <ScrollButtons />
      <Espacamento />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Contato/>
      <Rodape />
    </div>
  )
}

export default Home;
