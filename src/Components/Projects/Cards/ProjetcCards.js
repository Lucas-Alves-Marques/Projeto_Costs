import Style from './ProjectCards.module.css';
import { IoPencilSharp as Pencil } from "react-icons/io5";
import { FaTrash as Trash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

function Card({ id, name, budget, category, handleRemove }) {

    const navigate = useNavigate();

    return (

        <div className={Style.project_card}>

            <h4>{name}</h4>
            <p>

                <span>Orçamento:</span> R${budget}

            </p>
            <p className={Style.category_text}>

                <span className={`${Style[category.toLowerCase()]}`}></span>
                {category}

            </p>
            <div className={Style.project_card_action}>

                <p onClick={() => { navigate('/') }}>

                    <Pencil />
                    Editar

                </p>
                <p onClick={() => { navigate('/') }}>

                    <Trash />
                    Remover

                </p>

            </div>

        </div>
    )

}

export default Card;