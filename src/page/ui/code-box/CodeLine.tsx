import { FC, PropsWithChildren } from 'react'
import { ICodeLine } from './Elements.interface'
import styles from './Elements.module.scss';


export const CodeLine: FC<PropsWithChildren<ICodeLine>> = ({ children, lineNum }) => {
    return (
        <div className={styles.code_line_wrapper}>
            <span className={styles.num}>
                {lineNum}
            </span>
            {children}
        </div>
    )
}

