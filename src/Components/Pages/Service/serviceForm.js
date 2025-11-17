import Styles from '../Project/Project.module.css';
import Input from '../../Form/Input/Input';
import SubmitButton from '../../Form/SubmitButton/SubmitButton';
import { useState } from 'react';

function ServiceForm({handleSubmit, textBtn, projectData}){

    const [service, setService] = useState([])

    const submit = (e) => {

        e.preventDefault();

        projectData.services.push(service);

        handleSubmit(projectData)

    };

    const handleChange = (e) => {

        setService({...service, [e.target.name]: e.target.value})

    };

    return(

        <form onSubmit={submit} className={Styles.form}>

            <Input 
                type='text'
                text='Nome do Serviço'
                name='name'
                placeholder='Insira o nome do serviço'
                handelOnChage={handleChange}            
            />
            <Input 
                type='number'
                text='Custo do Serviço'
                name='cost'
                placeholder='Insira o valor total'
                handelOnChage={handleChange}            
            />
            <Input 
                type='text'
                text='Descrição do Serviço'
                name='description'
                placeholder='Descreva o serviço'
                handelOnChage={handleChange}            
            />
            <SubmitButton text={textBtn}/>

        </form>

    );

}

export default ServiceForm;