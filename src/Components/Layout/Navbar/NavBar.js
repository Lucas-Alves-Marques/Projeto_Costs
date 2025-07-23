import { Link } from "react-router-dom";
import Logo from '../../../img/costs_logo.png';
import Conteiner from "../Conteiner/Conteiner";
import Styles from './NavBar.module.css';

function NavBar() {

    return (
        <nav className={Styles.navbar}>

            <Conteiner>

                <Link to={'/'}><img src={Logo} alt="Logo do Projeto"></img></Link>
                <ul className={Styles.list}>

                    <li className={Styles.item}><Link to={'/'}>Inicio</Link></li>
                    <li className={Styles.item}><Link to={'/projects'}>Projetos</Link></li>
                    <li className={Styles.item}><Link to={'/company'}>Empresa</Link></li>
                    <li className={Styles.item}><Link to={'/contact'}>Contatos</Link></li>

                </ul>

            </Conteiner>

        </nav>
    );
}

export default NavBar;