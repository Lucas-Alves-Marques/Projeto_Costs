import { useLocation } from "react-router-dom";
import Message from "../../Layout/Message/Message";
import Styles from './Projects.module.css';
import Conteiner from '../../Layout/Conteiner/Conteiner';
import LinkButton from "../LinkButton";
import ProjectCard from './Cards/ProjetcCards.js';
import { useEffect, useState } from "react";
import Loading from "../../Layout/Loading/Loading.jsx";
import BaseURL from "../../../Config/url.jsx";

function Projects() {

    const location = useLocation();

    const message = location.state?.message;

    const [projects, setProjects] = useState([]);

    const [removeLoading, setRemoveLoading] = useState(false);

    const [projectMessage, setProjectsMessage] = useState('');

    useEffect(() => {

        setTimeout(() => {

            fetch(`${BaseURL}/projects`, {

                method: 'GET',
                headers: { 'Content-Type': 'application/json' }

            })
                .then(resp => resp.json())
                .then(data => {

                    setProjects(data)

                    setRemoveLoading(true);

                })
                .catch((err) => { console.log(err) });

        }, 300);

    }, []);

    function revomeProject(id_project){

        fetch(`${BaseURL}/projects/${id_project}`,{

            method:'DELETE',
            headers: {

                'Content-Type': 'application/json'

            }

        })
        .then(resp => resp.json())
        .then(() => {

            setProjects(projects.filter((projects) => projects.id !== id_project));
            setProjectsMessage('Projeto Removido!');

        })
        .catch(err => console.log(err))

    }

    return (

        <div className={Styles.project_container}>

            <div className={Styles.title_container}>

                <h1>Meus Projetos</h1>
                <LinkButton to={'/newproject'} text={'Criar Projeto'} />

            </div>
            {message &&

                <Message msg={message} type={'success'} />

            }
            {projectMessage &&

                <Message msg={projectMessage} type={'success'} />

            }
            <Conteiner customClass='grid'>

                {projects.length > 0 &&

                    projects.map((project) => (


                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={revomeProject}
                        />

                    ))

                }
                {!removeLoading && <Loading />}
                {removeLoading && projects.length === 0 && (

                    <p>Não há projetos cadastrados</p>

                )}

            </Conteiner>


        </div>

    );

}

export default Projects;