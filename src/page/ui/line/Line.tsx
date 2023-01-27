import { FC, HtmlHTMLAttributes } from 'react';
import styles from './Line.module.scss';

interface ILine extends HtmlHTMLAttributes<HTMLDivElement> {
    colors?: "default" | "compl_to_additional" | "compl_to_secondary" | "secondary_to_compl"
    | "additional_to_compl" | "additional_to_secondary" | "secondary_to_additional"

}

export const Line: FC<ILine> = ({ colors = "default", ...rest }) => {
    return (
        <div
            className={`${styles[colors]} ${styles.universal}`}
            {...{ ...rest }}
        >

        </div>
    )
}

