import { forwardRef } from "react";
import { IField } from "./Field.interface";
import styles from './Field.module.scss';

const Field = forwardRef<HTMLInputElement, IField>(
    ({ error, type = 'text', style, fieldTitle, ...rest }, ref) => {

        return (
            <div className={styles.input} style={style}>
                <input ref={ref} type={type} {...rest}></input>
                {fieldTitle && <h3 className={styles.title}>{fieldTitle}</h3>}
                <span ></span>
                {error && <div className={styles.error_text}>{error.message}</div>}
            </div>
        )
    }
)

export default Field