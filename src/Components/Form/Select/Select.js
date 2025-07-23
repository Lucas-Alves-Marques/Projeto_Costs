import styles from './Select.module.css';

function Select({text, name, options, handelOnChage, value}){
    return(

        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>

                <option>Selecione uma opção</option>
                {options.map((opt) => (

                    <option value={opt.name} id={opt.id}>{opt.name}</option>

                ))}

            </select>

        </div>

    );
}

export default Select;