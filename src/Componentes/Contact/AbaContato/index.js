import './AbaContato.css'
import Endereço from './img/🦆 icon _location pin_.png'
import Telefone from './img/🦆 icon _phone_.png'
import Email from './img/🦆 icon _envelope closed_.png'
import Video1 from './video/artabsoluta1.mp4'
import Video2 from './video/artabsoluta2.mp4'
import Video3 from './video/artabsoluta3.mp4'
import Telegram from './img/telegram-black.png'
import TikTok from './img/tiktok-black.png'
import Instagram from './img/instagram-black.png'

const AbaContato = (props) => {
    return (
        <div className='AbaContato'>
            <h2>Faça já sua encomenda !</h2>
            <p>Segue abaixo as redes sociais e uma amostra do meu trabalho!</p>

            <div className='ContatosIcones'>
             
                <span className='endereco'>
                    <h3>Endereço</h3> 
                    <img src={Endereço} alt='Icone de Endereço/Localização' />
                    <a href="https://maps.app.goo.gl/y7PVYZuTFEhTT8Wr5" target='_blank' rel="noopener noreferrer">
                        <p>
                            Quadra 999 Lote 999 <br></br>
                            Valparaiso De Goiás, GO <br></br> 
                            CEP - 999
                        </p>
                    </a>
                </span>

                <span className='telefone'>
                    <h3>Telefone</h3>
                    <img src={Telefone} alt='Icone de Telefone' />  
                    <a href="https://wa.me/61994309697" target='_blank' rel="noopener noreferrer">
                        <p>
                           +55(61)99430-9697 <br></br>
                        </p>
                    </a>
                </span>

                <span className='email'>
                    <h3>Email</h3>  
                    <img src={Email} alt='Icone de Email' />
                    <a href="mailto:teste@gmail.com" target="_blank" rel="noopener noreferrer">
                        <p>teste@gmail.com</p>
                    </a>
                </span>

            </div>

            <div className='CaixaDeRedeSociais'>
                <div className='video-container'>
                    <video controls autoPlay loop muted width="210" id='Video1'>
                        <source src={Video1} type='video/mp4' >
                        </source>
                    </video>

                    <video controls autoPlay loop muted width="210" id='Video2'>
                        <source src={Video2} type='video/mp4' >
                        </source>
                    </video>

                    <video controls autoPlay loop muted width="210" id='Video3'>
                        <source src={Video3} type='video/mp4' >
                        </source>
                    </video>
                </div>

                <div className='RedesSociaisContatosIcones'>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={Telegram} alt='Icone do Telegram'/>
                    </a>

                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={TikTok} alt='Icone do TikTok'/>
                    </a>

                    <a href="https://www.instagram.com/artabsoluta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                        <img src={Instagram} alt='Icone do Instagram'/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default AbaContato;