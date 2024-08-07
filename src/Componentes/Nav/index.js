import './Nav.css'
import Logo from './img/Logo.png'
import LogoYoutube from './img/LogoYoutube.png'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  return (  
    <div>
        <header>
            <ul className="nav justify-content-center text-align-center position-relative">
                <img src={Logo} alt='Logo' className='Logo' id='logoDiego'/>
                
                <li className="nav-item">
                    <Link className="nav-link active" to='/'>Início</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/about'>Sobre mim</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/arts'>Artes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/contact'>Contato</Link>
                </li>
                
                <Link to="https://www.youtube.com/watch?v=-wZl_ZhnVg4" target='_blank' rel="noreferrer">
                    <img src={LogoYoutube} alt='LogoYoutube' className='LogoYoutube'/>
                </Link>
            </ul>
            
        </header>
    </div>
    )
}

export default Nav;
