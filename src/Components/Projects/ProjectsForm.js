import Input from '../Form/Input';
import Select from '../Form/Select';
import SubmitButton from '../Form/SubmitButton';
import styles from './ProjetcForm.module.css'

function ProjectForm({textBtn}) {
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
            <Select name={'category_id'} text={'Selecione uma categoria'} />
            <SubmitButton text={textBtn} />
        </form>
    )
}

export default ProjectForm;