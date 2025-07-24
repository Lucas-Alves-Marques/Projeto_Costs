import ProjectForm from '../../Projects/Form/ProjectsForm';
import styles from './NewProjects.module.css';
import { useNavigate } from 'react-router-dom';

function NewProject() {

    const navigate = useNavigate();

    const createPost = (project) => {

        console.log(project);

        // initialize cost and services

        project.cost = 0;
        project.services = [];

        fetch('http://localhost:5000/projects', {

            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(project)

        })
            .then((resp) => resp.json())
            .then((data) => {

                console.log(data);

                navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } });

            })
            .catch((err) => { console.log(err) })

    };

    return (

        <div className={styles.newproject_conteiner}>

            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} textBtn='Criar Projeto' />

        </div>

    );

}

export default NewProject;