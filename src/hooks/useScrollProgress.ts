import { useCallback, useEffect, useState } from "react";



export const useScrollProgress = () => {

    const [progress, setProgress] = useState(0);

    const root = document.getElementById('root')

    const handleOnScroll = useCallback((e: Event) => {
        if (!root) return;
        const currentScroll = root.scrollTop;
        const scrollHeight = root.scrollHeight - window.innerHeight;
        if (scrollHeight) {
            const percent = Number((currentScroll / scrollHeight).toFixed(2)) * 100;
            setProgress(percent);
        }
    }, [])

    useEffect(() => {
        if (!root) return;
        root.addEventListener('scroll', handleOnScroll);

        return () => {
            root.removeEventListener('scroll', handleOnScroll);
        }


    }, [root])

    return progress;

}