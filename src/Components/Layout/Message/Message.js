import { useEffect, useState } from 'react';
import Style from './Message.module.css';

function Message({ type, msg }) {

    const [visible, setViseble] = useState(false);

    useEffect(() => {

        if(!msg){

            setViseble(false)

            return;

        }

        setViseble(true);

        const timer = setTimeout(() => {

            setViseble(false);

        }, 3000);

        return () => clearTimeout(timer);

    },[msg]);

    return (

        <>

            {visible && (

                <div className={`${Style.message} ${Style[type]}`}>

                    <p>{msg}</p>

                </div>

            )}

        </>

    );

}

export default Message;