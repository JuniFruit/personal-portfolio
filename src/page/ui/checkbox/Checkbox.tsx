import { FC } from 'react'
import { ICheckbox } from './Checkbox.interface'
import styles from './Checkbox.module.scss';

export const Checkbox: FC<ICheckbox> = ({ fieldTitle, ...rest }) => {
    return (
        <div className={styles.checkbox_main}>
            <input  {...rest} type="checkbox" />
            <label>{fieldTitle}</label>
        </div>
    )
}

