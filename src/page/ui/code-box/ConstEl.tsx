import { FC, PropsWithChildren } from 'react'
import styles from './Elements.module.scss';
import { IConstEl } from './Elements.interface';

export const ConstEl: FC<PropsWithChildren<IConstEl>> = ({ varName, valueColor, children }) => {
    return (
        <div className={styles.const_wrapper}>
            <span className={styles.syntax}>
                const
            </span>
            <span className={styles.keyword}>
                {varName}
            </span>
            <span className={styles.default}>=</span>
            <span className={styles[valueColor]}>
                {children}
            </span>

        </div>
    )
}

