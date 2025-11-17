import Style from './Contact.module.css';
import selfImg from '../../../img/MinhaFoto.jpeg';
import { FaGithub as GitHub } from "react-icons/fa6";
import { IoLogoLinkedin as Linkdin } from "react-icons/io5";
import { BiLogoGmail as Gmail } from "react-icons/bi";
import { Link } from 'react-router-dom';

function Contact() {

    return (

        <div className={ Style.mainContacts }>

            <div className={ Style.contatcs }>

                <img src={ selfImg } alt='Minha Foto' />
                <div className={ Style.links }>

                    <div>

                        <div className={ Style.alingContats }>

                            <GitHub />
                            <h2>Git Hub:</h2>

                        </div>
                        <Link to={ 'https://github.com/Lucas-Alves-Marques' }>

                            <p>Lucas Alves Marques</p>

                        </Link>

                    </div>
                    <div>

                        <div className={ Style.alingContats }>

                            <Linkdin />
                            <h2>Linkedin:</h2>

                        </div>
                        <Link to={ 'https://www.linkedin.com/in/lucas-alves-752055214/' }>

                            <p>Lucas Alves</p>

                        </Link>

                    </div>
                    <div>

                        <div className={ Style.alingContats }>

                            <Gmail />
                            <h2>E-mail:</h2>

                        </div>
                        <Link to={ 'mailto:lucas.marquesalv24@gmail.com' }>

                            <p>lucas.marquesalv24@gmail.com</p>

                        </Link>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Contact;