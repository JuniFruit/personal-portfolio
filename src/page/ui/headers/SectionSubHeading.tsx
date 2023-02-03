import { FC } from 'react';
import { ISectionSubHeading } from './Headers.interface';
import styles from './Headers.module.scss';

const SectionSubHeading: FC<ISectionSubHeading> = ({ textAccent, textMain, accentColor, ...rest }) => {
    return (
        <p
            {...{ ...rest }}
            className={styles.section_subheading}
        >
            <span className={styles[accentColor]} >{textAccent}</span> <br></br> {textMain}
        </p>
    )
}

export default SectionSubHeading
