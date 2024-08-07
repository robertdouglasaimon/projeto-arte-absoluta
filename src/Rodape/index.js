import './Rodape.css'
import Instagram from '../Rodape/img/image 1.png'
import Facebook from '../Rodape/img/image 2.png'
import X from '../Rodape/img/image 3.png'

const Rodape = (props) => {
    return (
        <footer className='container'>
            <div className="textoRodape">
                <p>Diego  2024 ©  Criado  por 
                    <a href="https://github.com/robertdouglasaimon?tab=overview&from=2024-08-01&to=2024-08-04" target="_blank" rel="noopener noreferrer">
                        Robert Douglas ️
                    </a>
                </p>
            </div>

            <div className="iconesRodape">  
                <a href="https://www.instagram.com/artabsoluta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt='Instagram icone'/>
                </a> 

                <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt='Facebook icone'/>
                </a>

                <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src={X} alt='X icone'/>
                </a>
            </div>
        </footer>
    )
}

export default Rodape;