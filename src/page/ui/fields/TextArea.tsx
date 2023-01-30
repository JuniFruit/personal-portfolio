
import { ITextArea } from "./Field.interface";
import { forwardRef } from "react";
import styles from './Field.module.scss';

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
    ({ error, style, fieldTitle, ...rest }, ref) => {
        return (

            <div className={styles.input} style={style}>
                <textarea ref={ref} {...rest}></textarea>
                {fieldTitle && <h3 className={styles.title}>{fieldTitle}</h3>}
                <span ></span>
                {error && <div className={styles.error_text}>{error.message}</div>}
            </div>
        )
    }
)

export default TextArea