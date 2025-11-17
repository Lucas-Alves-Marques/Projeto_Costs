import { useParams } from "react-router-dom";
import Style from "./Project.module.css";
import { useEffect, useState } from "react";
import BaseURL from "../../../Config/url";
import Loading from "../../Layout/Loading/Loading";
import Conteiner from "../../Layout/Conteiner/Conteiner";
import ProjectForm from "../Projects/Form/ProjectsForm";
import Message from "../../Layout/Message/Message";
import ServiceForm from "../Service/serviceForm";
import { parse, v4 as uuidv4 } from 'uuid';
import ServiceCard from "../Service/serviceCard";

function Project() {

  const { id } = useParams();

  const [ project, setProject ] = useState();

  const [ showProjectForm, setShowProjectForm ] = useState( false );

  const [ showServicetForm, setShowServicetForm ] = useState( false );

  const [ message, setMessage ] = useState();

  const [ typeMessage, setTypeMessage ] = useState();

  const toggleProjectForm = () => {

    setShowProjectForm( !showProjectForm )

  };

  const toggleServiceForm = () => {

    setShowServicetForm( !showServicetForm )

  };

  const editPost = ( project ) => {

    setMessage( '' );

    // Budget validation

    if( project.budget < project.cost )
    {

      setMessage( 'O orçamento não pode ser menor que o custo do projeto!' );

      setTypeMessage( 'error' );

      return;

    }

    fetch( `${ BaseURL }/projects/${ project.id }`, {

      method: 'PUT',
      headers: {

        'Content-Type': 'application/json',

      },
      body: JSON.stringify( project )


    } )
      .then( resp => resp.json() )
      .then( data => {

        setProject( data );

        setShowProjectForm( !showProjectForm );

        setMessage( 'O projeto atualizado!' );

        setTypeMessage( 'success' );

      } )
      .catch( err => console.log( err ) )

  };

  const createService = ( project ) => {

    setMessage( '' );

    const lastService = project.services[ project.services.length - 1 ];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat( project.cost ) + parseFloat( lastServiceCost );

    if( newCost > parseFloat( project.budget ) )
    {

      setMessage( 'Orçamento ultrapassado, verifique o valor do serviço!' );

      setTypeMessage( 'error' );

      project.services.pop();

      return false;

    }

    project.cost = newCost;

    fetch( `${ BaseURL }/projects/${ project.id }`, {

      method: 'PUT',
      headers: {

        'Content-Type': 'application/json'

      },
      body: JSON.stringify( project )

    } )
      .then( resp => resp.json() )
      .then( () => {

        setMessage( 'Serviço Cadastrado' );

        setTypeMessage( 'success' );

        toggleServiceForm();

      } )
      .catch( err => {

        setMessage( 'Não Foi possivel cadastrar o Serviço' );

        setTypeMessage( 'error' );

        console.log( err )

      } )

  };

  const removeService = ( id, cost ) => {

    const serviceUpdated = project.services.filter( serv => serv.id !== id );

    const projectUpdated = project;

    projectUpdated.services = serviceUpdated;

    if( projectUpdated.cost !== 0 )
    {

      projectUpdated.cost = parseFloat( projectUpdated.cost ) - parseFloat( cost );

    }

    fetch( `${ BaseURL }/projects/${ projectUpdated.id }`, {

      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( projectUpdated )

    } )
      .then( resp => resp.json() )
      .then( () => {

        setProject( projectUpdated )
        setMessage( 'Serviço excluido com sucesso' )
        setTypeMessage( 'success' )

      } )
      .catch( err => console.log( err ) )

  };

  useEffect( () => {

    setTimeout( () => {

      fetch( `${ BaseURL }/projects/${ id }`, {

        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      } )
        .then( ( resp ) => resp.json() )
        .then( ( data ) => setProject( data ) )
        .catch( ( err ) => console.log( err ) );

    }, 3000 );
  }, [ id ] );

  return (

    <>

      { project ? (

        <div className={ Style.project_details }>

          <Conteiner customClass="column">

            { message && <Message type={ typeMessage } msg={ message } /> }
            <div className={ Style.details_container }>

              <h1>Projeto: { project?.name }</h1>
              <button onClick={ toggleProjectForm } className={ Style.btn }>

                { showProjectForm ? 'Fechar' : 'Editar Projeto' }

              </button>
              { !showProjectForm ? (

                <div className={ Style.project_info }>

                  <p>

                    <span>Categoria: </span> { project.category.name }

                  </p>
                  <p>

                    <span>Total Orçamento: </span> R$ { project.budget }

                  </p>
                  <p>

                    <span>Total Utilizado: </span> R$ { project.cost }

                  </p>

                </div>


              ) : (

                <div className={ Style.project_info }>

                  <ProjectForm
                    handleSubmit={ editPost }
                    textBtn={ "Concluir Edição" }
                    ProjectData={ project }
                  />

                </div>

              ) }

            </div>
            <div className={ Style.services_form_container }>

              <h2>Adicionar um serviço:</h2>
              <button onClick={ toggleServiceForm } className={ Style.btn }>

                { showServicetForm ? 'Fechar' : 'Adicionar Serviço' }

              </button>
              <div className={ Style.project_info }>

                { showServicetForm && (

                  <ServiceForm
                    handleSubmit={ createService }
                    textBtn='Adicionar Serviço'
                    projectData={ project }
                  />


                ) }

              </div>

            </div>
            <h2>Serviços</h2>
            <Conteiner customClass='start'>

              { project.services.length > 0 && (

                <Conteiner customClass='grid'>

                  { project.services.map( ( serv ) => (

                    <ServiceCard
                      id={ serv.id }
                      name={ serv.name }
                      cost={ serv.cost }
                      description={ serv.description }
                      key={ serv.id }
                      handleRemove={ removeService }


                    />


                  ) )

                  }

                </Conteiner>

              ) }

              { project.services.length == 0 && (

                <p>Não há projetos cadastrados</p>

              ) }

            </Conteiner>

          </Conteiner>


        </div>

      ) : ( <Loading /> ) }

    </>
  );

}

export default Project;
