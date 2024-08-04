import './Rodape.css'
import Instagram from '../img/image 1.png'
import Facebook from '../img/image 2.png'
import X from '../img/image 3.png'

const Rodape = (props) => {
    return (
        <footer className='container'>
            <div className="textoRodape">
                <p>Diego  2024 ©  Criado  por 
                    <a href="https://github.com/robertdouglasaimon?tab=overview&from=2024-08-01&to=2024-08-04">
                        Robert Douglas ️
                    </a>
                </p>
            </div>

            <div className="iconesRodape">  
                <a href="https://www.instagram.com/artabsoluta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                    <img src={Instagram} alt='Instagram icone'/>
                </a> 

                <a href="/">
                    <img src={Facebook} alt='Facebook icone'/>
                </a>

                <a href="/">
                    <img src={X} alt='X icone'/>
                </a>
            </div>
        </footer>
    )
}

export default Rodape;