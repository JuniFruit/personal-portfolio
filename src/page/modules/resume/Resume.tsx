import { FC } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import ResumeComp from '../../components/resume/ResumeComp';
import IconGlow from '../../ui/icons/IconGlow';
import { Line } from '../../ui/line/Line';
import styles from './Resume.module.scss';


const Resume: FC = () => {


    return (
        <section className={styles.section_wrapper}>
            <IconGlow bgGlow="complimentary">
                <IoDocumentTextOutline />
            </IconGlow>
            <ResumeComp />
            <Line />
        </section>
    )
}

export default Resume
