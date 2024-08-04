import './Contato.css'
import Whatsapp from '../img/Whatsapp.png';
import Email from '../img/Email.png';
import Seta from '../img/Seta.png';

const Contato = (props) => {
    return (
        <div className="contatoContainer">
            <div className="contatoTexto">
                <h1>Contato</h1>
                <p>
                    Tem alguma dúvida ou precisa de mais informações? Estamos aqui para ajudar!
                </p>
                <p>
                    Estamos ansiosos para ouvir de você. Clique nos icones abaixo e faça a sua encomenda, compartilhe conosco <br></br>sua ideia!
                </p>
                <h2>Me siga nas redes sociais !</h2>
            </div>

            <div className="fotoContatos"> 
                <div className="contatoRedesSociais">
                    <a href="https://wa.me/61994309697">
                        <img src={Whatsapp} alt='Whatsapp' id='wpp'/>
                    </a>
                    <a href="/">
                        <img src={Email} alt='Email' id='email'/>
                    </a>
                </div>

                <img src={Seta} alt='Seta' className='seta' id='seta'/>
            </div>
        </div>
    )
}

export default Contato