import { FC, PropsWithChildren } from 'react'
import { ICodeHeading } from './Headers.interface';
import styles from './Headers.module.scss';
const CodeHeading: FC<PropsWithChildren<ICodeHeading>> = ({ accentColor, children, ...rest }) => {
    return (
        <h2
            {...{ ...rest }}
            className={`${styles.code_heading} ${styles[accentColor]}`}
        >
            {"<"} {children} {">"}
        </h2>
    )
}

export default CodeHeading
