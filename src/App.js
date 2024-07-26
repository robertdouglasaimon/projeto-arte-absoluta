import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery'; 
import Nav from './Componentes/Nav';
import Section1 from './Componentes/Section1';
import Espacamento from './Componentes/Espacamento';
import Section2 from './Componentes/Section2';
import Section3 from './Componentes/Section3';

window.$ = $;

function App() {
  return (
    <div className="App">
        <Nav/>
        <Espacamento/>
        <Section1/>
        <Section2/>
        <Section3/>
    </div>
  );
}

export default App;
