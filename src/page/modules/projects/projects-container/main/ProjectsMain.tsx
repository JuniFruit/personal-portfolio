import { FC, useState, useCallback } from 'react'
import { images } from '../../../../../assets/images/images';
import { RotatedImage } from '../../../../ui/image/rotated/RotatedImage';
import { ProjectsList } from './list/ProjectsList';
import styles from "./ProjectsMain.module.scss";

const ProjectsMain: FC = () => {
    const [preview, setPreview] = useState('');

    const setPreviewSrc = useCallback((imgSrc: string) => {
        setPreview(imgSrc)
    }, [])

    const handleClickItem = useCallback((link: string) => {

    }, [])

    return (
        <div className={styles.main_wrapper}>
            <ProjectsList
                onItemClick={handleClickItem}
                onItemHover={setPreviewSrc}
            />
            <RotatedImage
                imgSrc={preview}
                alt="Project preview"
            />
        </div>
    )
}

export default ProjectsMain

