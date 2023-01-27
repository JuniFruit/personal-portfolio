import { FC } from 'react'
import { ITabActive } from './Elements.interface';
import styles from './Elements.module.scss';


export const TabActive: FC<ITabActive> = ({ title }) => {
    return (
        <div className={styles.tab_wrapper}>
            <h3>
                {`${title}.js`}
            </h3>
        </div>
    )
}

