import { useState, useRef, useEffect } from 'react';

interface IUseIntersect {
    options?: IntersectionObserverInit;
    onIntersect?: (entry: IntersectionObserverEntry) => void;
}

export const useIntersect = ({ onIntersect, options }: IUseIntersect) => {

    const [isIntersecting, setIsInersecting] = useState(false);

    const ref = useRef<any>(null)

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {

                setIsInersecting(entry.isIntersecting);
                if (entry.isIntersecting && !!onIntersect) onIntersect(entry)
            })

        }, options);

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        }

    }, [ref.current, options])

    return {
        ref,
        isIntersecting
    }

}