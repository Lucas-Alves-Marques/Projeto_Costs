import style from '../Projects/Cards/ProjectCards.module.css';
import { FaTrash as Trash } from "react-icons/fa6";

function ServiceCard( { id, name, cost, description, handleRemove } ) {

    const remove = () => { 

        handleRemove(id,cost);

    };

    return (

        <div className={ style.project_card }>

            <h4>{ name }</h4>
            <p>

                <span>Custo Total:</span> R$ { cost }

            </p>
            <p>{ description }</p>
            <div className={ style.project_card_action }>

                <p onClick={ remove }>

                    <Trash />
                    Excluir

                </p>

            </div>

        </div>

    );

}

export default ServiceCard;