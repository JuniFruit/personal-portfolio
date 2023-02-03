import { FC, useCallback, useState } from 'react';
import { useIsMobile } from '../../../../../hooks/useIsMobile';
import InfoDialog from '../../../../ui/dialog/InfoDialog';
import PreviewVideo from '../../../../ui/video/PreviewVideo';
import { infoMessage } from '../utils/general';
import { ProjectsList } from './list/ProjectsList';
import styles from "./ProjectsMain.module.scss";

const ProjectsMain: FC = () => {
    const [preview, setPreview] = useState('');
    const [isProjectClicked, setIsProjectClicked] = useState(false);
    const setPreviewSrc = useCallback((previewSrc: string) => {
        setPreview(previewSrc)
    }, [])
    const { isMobile } = useIsMobile()

    const handleClickItem = useCallback((link: string) => {

        const isInfoHidden = window.localStorage.getItem("info_hidden") === 'true';
        const delay = isInfoHidden ? 0 : 2000;

        setTimeout(() => {
            window.open(link, "_blank");
        }, delay)

        if (!isInfoHidden && !isMobile) setIsProjectClicked(true);
    }, [])

    return (
        <div className={styles.main_wrapper}>
            <ProjectsList
                onItemClick={handleClickItem}
                onItemHover={setPreviewSrc}
            />
            {
                !isMobile ? <PreviewVideo
                    videoSrc={preview}

                /> : null
            }
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

