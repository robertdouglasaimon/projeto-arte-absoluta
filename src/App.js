import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery'; 
import Nav from './Componentes/Nav';
import Section1 from './Componentes/Section1';
import Espacamento from './Componentes/Espacamento';
import Section2 from './Componentes/Section2';
import Section3 from './Componentes/Section3';
import Section4 from './Componentes/Section4';
import Section5 from './Componentes/Section5';
import Section6 from './Componentes/Section6';
import Contato from './Componentes/Contato';
import Rodape from './Componentes/Rodape';

window.$ = $;

function App() {
  return (
    <div className="App">
        <Nav/>
        <Espacamento/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Contato/>
        <Rodape/>
    </div>
  );
}

export default App;
