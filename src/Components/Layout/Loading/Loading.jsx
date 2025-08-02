import Style from './Loading.module.css';
import loadingImg from '../../../img/loading.svg';

function Loading(){

    return(

        <div className={Style.loader_container}>

            <img src={loadingImg} alt='imagem de carregamento' />

        </div>

    )

}

export default Loading;

