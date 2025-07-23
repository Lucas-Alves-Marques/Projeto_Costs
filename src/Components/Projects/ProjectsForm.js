import { useEffect, useState } from 'react';
import Input from '../Form/Input/Input';
import Select from '../Form/Select/Select';
import SubmitButton from '../Form/SubmitButton/SubmitButton';
import styles from './ProjetcForm.module.css'

function ProjectForm({ textBtn }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/categories', {

            method: "GET",
            headers: { 'Content-Type': 'application/json' },

        })
            .then((resp) => resp.json())
            .then((data) => { setCategories(data) })
            .catch((err) => console.log(err));

    }, []);

    return (

        <form className={styles.form}>

            <Input type={'text'}
                text={'Nome do Projeto'}
                name={'name'}
                placeholder={'Insira o nome do projeto'}
            />
            <Input type={'number'}
                text={'Orçamento do Projeto'}
                name={'budget'}
                placeholder={'Insira o orçamento do projeto'}
            />
            <Select
                name={'category_id'}
                text={'Selecione uma categoria'}
                options={categories}
            />
            <SubmitButton text={textBtn} />

        </form>
    )
}

export default ProjectForm;