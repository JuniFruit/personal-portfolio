import { FC, useCallback, useState } from 'react';
import InfoDialog from '../../../../ui/dialog/InfoDialog';
import { RotatedImage } from '../../../../ui/image/rotated/RotatedImage';
import { infoMessage } from '../utils/general';
import { ProjectsList } from './list/ProjectsList';
import styles from "./ProjectsMain.module.scss";

const ProjectsMain: FC = () => {
    const [preview, setPreview] = useState('');
    const [isProjectClicked, setIsProjectClicked] = useState(false);
    const setPreviewSrc = useCallback((imgSrc: string) => {
        setPreview(imgSrc)
    }, [])

    const handleClickItem = useCallback((link: string) => {

        const isInfoHidden = window.localStorage.getItem("info_hidden") === 'true';
        const delay = isInfoHidden ? 0 : 2000;

        setTimeout(() => {
            window.open(link, "_blank");
        }, delay)

        if (!isInfoHidden) setIsProjectClicked(true);
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
            {
                isProjectClicked ?
                    <InfoDialog
                        onClose={() => setIsProjectClicked(false)}
                        message={infoMessage}
                        isOpen={isProjectClicked}
                    />
                    : null
            }
        </div>
    )
}

export default ProjectsMain

