import { useLocation } from "react-router-dom";
import Message from "../../Layout/Message/Message";
import Styles from './Projects.module.css';
import Conteiner from '../../Layout/Conteiner/Conteiner';
import LinkButton from "../LinkButton";
import ProjectCard from '../../Projects/Cards/ProjetcCards.js';
import { useEffect, useState } from "react";

function Projects() {

    const location = useLocation();

    const message = location.state?.message;

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/projects', {

            method: 'GET',
            headers: { 'Content-Type': 'application/json' }

        })
            .then(resp => resp.json())
            .then(data => { setProjects(data) })
            .catch((err) => { console.log(err) })

    }, []);

    return (

        <div className={Styles.project_container}>

            <div className={Styles.title_container}>

                <h1>Meus Projetos</h1>
                <LinkButton to={'/newproject'} text={'Criar Projeto'} />

            </div>
            {message &&

                <Message msg={message} type={'success'} />

            }
            <Conteiner customClass='start'>

                {projects.length > 0 &&

                    projects.map((project) => (


                        <ProjectCard
                            name={project.name}
                            id={project.id}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />

                    ))

                }

            </Conteiner>

        </div>

    );

}

export default Projects;