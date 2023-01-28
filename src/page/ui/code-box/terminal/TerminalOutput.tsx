import { FC, PropsWithChildren } from 'react'
import styles from './Terminal.module.scss';
import { ITerminalOutput } from './TerminalOutput.interface';


const TerminalOutput: FC<PropsWithChildren<ITerminalOutput>> = ({ fileName, children }) => {
    return (
        <div className={styles.terminal_wrapper}>
            <span>{">"} executing node {`${fileName}.js`} </span>
            <span className={styles.second_span}> Compiled successfully!</span>
            {children}
        </div>
    )
}

export default TerminalOutput
