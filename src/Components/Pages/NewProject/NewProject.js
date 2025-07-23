import ProjectForm from '../../Projects/ProjectsForm';
import styles from './NewProjects.module.css';

function NewProject(){

    return (

        <div className={styles.newproject_conteiner}>

            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm textBtn='Criar Projeto'/>

        </div>

    );

}

export default NewProject;