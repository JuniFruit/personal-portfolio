import { FC } from 'react'
import { Button } from '../../ui/buttons/button/Button';
import HeadingSection from '../../ui/headers/HeadingSection';
import styles from './ResumeComp.module.scss';

const ResumeComp: FC = () => {
    return (
        <div className={styles.wrapper}>
            <HeadingSection>
                You can download my CV right away
            </HeadingSection>
            <Button>
                Download
            </Button>
        </div>
    )
}

export default ResumeComp
