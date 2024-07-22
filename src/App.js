import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery'; 
import Nav from './Componentes/Nav';
import Section1 from './Componentes/Section1';
import Espacamento from './Componentes/Espacamento';

window.$ = $;

function App() {
  return (
    <div className="App">
        <Nav/>
        <Espacamento/>
        <Section1/>
    </div>
  );
}

export default App;
