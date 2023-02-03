import { FC } from 'react'
import { HandleMessages, IHandler } from './Handler.interface';
import styles from './Handler.module.scss';

const Handler: FC<IHandler> = ({ result }) => {

    if (!result) return null;
    console.log(result)
    return (
        <div className={`${styles.wrapper} ${result.status !== 200 ? styles.error : ''}`}>
            <p>{result.status === 200 ? HandleMessages.OK : `${HandleMessages.ERROR} ${result.text}`}</p>
        </div>
    )
}

export default Handler
