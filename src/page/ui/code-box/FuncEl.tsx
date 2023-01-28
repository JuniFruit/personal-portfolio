import { FC } from 'react'
import { IFuncEl } from './Elements.interface';
import styles from './Elements.module.scss';

const FuncEl: FC<IFuncEl> = ({ funcName, arg }) => {
    return (
        <div className={styles.const_wrapper}>
            <span className={styles.syntax}>
                function
            </span>
            <span className={styles.func_name}>
                {funcName}
            </span>
            <span className={styles.default}>
                <p className='-ml-3'>{"("}<span className={styles.arg}>{arg}</span>{")"}</p>
            </span>
        </div>
    )
}

export default FuncEl
