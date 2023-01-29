import { FC } from 'react'
import { images } from '../../../../assets/images/images';
import Box from '../../../components/flex-box/Box'
import { RotatedImage } from '../../../ui/image/rotated/RotatedImage';
import styles from './EducationBox.module.scss';


const EducationBox: FC = () => {
    return (
        <Box>
            <div className={styles.content}>
                <p>
                    <span>Despite having no formal technical background</span>,<br /> I was always interested in computers and technologies behind them.
                    My first attempt to code was in childhood using QBasic programming language.

                </p>
                <p>
                    To learn Front end technologies, I have been using <strong>Google</strong> as my primary source of information, however I also took <strong>Codecademy</strong> courses that helped me to structure my studying process and gave me tons of useful resources.
                    To hone my skills and to learn best practices, I have been reading through countless articles and watching hours of YouTube videos.
                </p>
            </div>
            <RotatedImage
                imgSrc={images.certificate}
                alt={'Certificate'}
            />
        </Box>
    )
}

export default EducationBox
