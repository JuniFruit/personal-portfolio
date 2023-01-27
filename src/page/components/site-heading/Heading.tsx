import { FC } from 'react'
import HeadingMain from '../../ui/headers/HeadingMain';
import HeadingSub from '../../ui/headers/SubHeading';
import styles from './Heading.module.scss';

const Heading: FC = () => {
    return (
        <div className={styles.heading}>
            <HeadingMain>
                Hello Everyone!
            </HeadingMain>

            <HeadingSub>
                Welcome to my Portfolio Website. Here I showcase my projects and skills
            </HeadingSub>
        </div>
    )
}

export default Heading
