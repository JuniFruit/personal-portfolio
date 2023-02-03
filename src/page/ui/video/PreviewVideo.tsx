import { FC } from 'react'
import { images } from '../../../assets/images/images';
import { IVideo } from './PreviewVideo.interface'
import styles from './Video.module.scss';

const PreviewVideo: FC<IVideo> = ({ posterSrc, videoSrc }) => {
    return (
        <div className={styles.container}>
            <video
                src={videoSrc}
                poster={posterSrc ? posterSrc : images.preview_bg}
                autoPlay
                muted
                loop
            />
        </div>
    )
}

export default PreviewVideo
