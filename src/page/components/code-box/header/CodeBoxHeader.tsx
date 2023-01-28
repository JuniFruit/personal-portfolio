import { FC } from 'react'
import { IoCodeOutline, IoLogoJavascript } from 'react-icons/io5';
import styles from './CodeBoxHeader.module.scss';


const CodeBoxHeader: FC<{ title: string }> = ({ title }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.left_elements}>
                <IoCodeOutline />
            </div>
            <div className={styles.title}>
                <h2>
                    {`${title}.module.js - Code Studio`}
                </h2>
            </div>
            <div className={styles.right_elements}>
                <IoLogoJavascript />
            </div>

        </div>
    )
}

export default CodeBoxHeader
