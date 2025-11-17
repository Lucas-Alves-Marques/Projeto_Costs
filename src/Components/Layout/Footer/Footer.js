import { FaGithub as GitHub } from "react-icons/fa6";
import { IoLogoLinkedin as Linkdin } from "react-icons/io5";
import { BiLogoGmail as Gmail } from "react-icons/bi";
import Styles from './Footer.module.css';
import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className={ Styles.footer }>

            <ul className={ Styles.social_list }>

                <li>

                    <Link to={ 'https://github.com/Lucas-Alves-Marques' }>

                        <GitHub />

                    </Link>

                </li>
                <li>

                    <Link to={ 'https://www.linkedin.com/in/lucas-alves-752055214/' }>


                        <Linkdin />

                    </Link>

                </li>
                <li>

                    <Link to={ 'mailto:lucas.marquesalv24@gmail.com' }>


                        <Gmail />

                    </Link>

                </li>

            </ul>
            <p className={ Styles.copy_right }><span>Costs</span> &copy; 2025</p>

        </footer>
        
    )
}

export default Footer;

