import { useState, useEffect, useRef, MouseEventHandler } from 'react'

export const useDetectCollision = () => {

    const [isCollided, setIsCollided] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const detectCollision = (e: MouseEvent) => {
        if (!ref.current) return;
        const { top, right, left, bottom, x, y, width, height } = ref.current.getBoundingClientRect();
        const { clientX, clientY } = e
        const mouse = {
            w: 30,
            h: 30
        }
        const objectVelocity = {
            vx: 40,
            vy: 40
        }
        const mouseVelocity = {
            vx: 50,
            vy: 50
        }
        // (clientY > top && clientY < bottom) && (clientX > left && clientX < right)
        if (clientX > width + x || x > mouse.w + clientX || clientY > height + y || y > mouse.h + clientY) {


            // console.log(ref.current)
        } else {
            let vCollision = { x: clientX - x, y: clientY - y };
            let distance = Math.sqrt((clientX - x) * (clientX - x) + (clientY - y) * (clientY - y));
            let vCollisionNorm = { x: vCollision.x / distance, y: vCollision.y / distance };
            let vRelativeVelocity = { x: mouseVelocity.vx - objectVelocity.vx, y: mouseVelocity.vy - objectVelocity.vy };
            let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
            ref.current.style.top = `${top - (speed * vCollisionNorm.y)}px`
            ref.current.style.left = `${left - (speed * vCollisionNorm.x)}px`;
            console.log(ref.current.getBoundingClientRect())
        }
    }

    useEffect(() => {

        window.addEventListener('mousemove', detectCollision);

        return () => {
            window.removeEventListener('mousemove', detectCollision)
        }

    }, [])

    return {
        ref,
        isCollided
    }
}