import React from 'react';
import ScrollButtons from '../Home/ScrollButtons';
import ArtsSection1 from './Section1';
import ArtsSection2 from './Section2';


const Arts = (props) => {
  return (
    <div>
        <ScrollButtons/> 
        <ArtsSection1/>
        <ArtsSection2/>
    </div>
  );
};

export default Arts;
