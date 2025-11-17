import { useEffect, useState } from 'react';
import Input from '../../../Form/Input/Input';
import Select from '../../../Form/Select/Select';
import SubmitButton from '../../../Form/SubmitButton/SubmitButton';
import styles from './ProjetcForm.module.css';
import BaseURL from '../../../../Config/url';

function ProjectForm({ handleSubmit, ProjectData, textBtn }) {

    const [categories, setCategories] = useState([]);

    const [project, setProject] = useState(ProjectData || {});

    const submit = (e) => {

        e.preventDefault();

        handleSubmit(project);

    };

    const handleChange = (e) => {

        setProject({ ...project, [e.target.name]: e.target.value });

    };

    const handleCategory = (e) => {

        setProject({
            ...project, category: {

                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text

            }
        });

    };

    useEffect(() => {

        fetch(`${BaseURL}/categories`, {

            method: "GET",
            headers: { 'Content-Type': 'application/json' },

        })
            .then((resp) => resp.json())
            .then((data) => { setCategories(data) })
            .catch((err) => console.log(err));

    }, []);

    return (

        <form onSubmit={submit} className={styles.form}>

            <Input
                type={'text'}
                text={'Nome do Projeto'}
                name={'name'}
                placeholder={'Insira o nome do projeto'}
                handelOnChage={handleChange}
                value={project.name ? project.name : ''}
            />
            <Input
                type={'number'}
                text={'Orçamento do Projeto'}
                name={'budget'}
                placeholder={'Insira o orçamento do projeto'}
                handelOnChage={handleChange}
                value={project.budget ? project.budget : ''}
            />
            <Select
                name={'category_id'}
                text={'Selecione uma categoria'}
                options={categories}
                handelOnChage={handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <SubmitButton text={textBtn} />

        </form>
    )
}

export default ProjectForm;