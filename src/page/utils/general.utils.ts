

export const getIntersectDefaultOpt = (): IntersectionObserverInit => {
    return {
        root: null,
        rootMargin: "0px 0px -200px 0px",
        threshold: 0
    }
}