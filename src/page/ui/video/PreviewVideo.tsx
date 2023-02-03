import { FC } from 'react'
import { IVideo } from './PreviewVideo.interface'
import styles from './Video.module.scss';

const PreviewVideo: FC<IVideo> = ({ posterSrc, videoSrc }) => {
    return (
        <div className={styles.container}>
            <video
                src={videoSrc}
                poster={posterSrc}
                autoPlay
                muted
                loop
            />
        </div>
    )
}

export default PreviewVideo
