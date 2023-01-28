import { FC, PropsWithChildren } from 'react'
import styles from './TerminalWindow.module.scss';


const TerminalWindow: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.terminal_header}>
                <span>Terminal</span>
                <span>Problems</span>
                <span>Output</span>
                <span>Debug Console</span>
            </div>
            {children}
        </div>
    )
}

export default TerminalWindow
