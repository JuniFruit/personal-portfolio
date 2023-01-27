import { FC } from 'react'
import { IoMenu } from 'react-icons/io5';
import styles from './LeftPanel.module.scss';
const LeftPanel: FC = () => {
    return (
        <div className={styles.wrapper}>
            <IoMenu />

        </div>
    )
}

export default LeftPanel
