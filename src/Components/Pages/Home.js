import styles from './Home.module.css'
import cofrinho from '../../img/savings.svg'
import LinkButton from './LinkButton';

function Home(){
    return (
        <section className={styles.home_conteiner}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo</p>
            <LinkButton to={'/newproject'} text={'Criar Projeto'} />
            <img src={cofrinho} alt='Costs' />
        </section>
    )
}

export default Home;