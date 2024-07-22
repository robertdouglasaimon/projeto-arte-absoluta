import './Nav.css'
import Logo from '../img/Logo.png'
import LogoYoutube from '../img/LogoYoutube.png'

const Nav = (props) => {
  return (  
    <div>
        <header>
            <ul className="nav justify-content-center text-align-center position-relative">
                <img src={Logo} alt='Logo' className='Logo'/>
                
                <li className="nav-item">
                    <a className="nav-link active" href='/'>Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/'>Sobre mim</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/'>Artes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href='/'>Contato</a>
                </li>
                
                <a href="https://www.youtube.com/watch?v=-wZl_ZhnVg4" target='_blank' rel="noreferrer">
                    <img src={LogoYoutube} alt='LogoYoutube' className='LogoYoutube'/>
                </a>
            </ul>
            
        </header>
    </div>
    )
}

export default Nav;