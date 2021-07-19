import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'
import styles from "./glassmorphismCard.module.css"

const GlassmorphismCard: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        VanillaTilt.init(ref.current as HTMLDivElement, {
            max: 25, speed: 400, glare: true, 'max-glare': 1,
        })
        return () => {
            // @ts-ignore
            ref.current?.vanillaTilt?.destroy?.();
        }
    }, [ref])
    return (
        <div ref={ref} className={styles.card}>
            <div className={styles.box}>
                <div className={styles.content}>
                    <h2>01</h2>
                    <h3>Card One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias velit est soluta cum, ex ea, a maxime ullam unde natus hic nostrum. Debitis et cupiditate ut esse voluptatem nobis facilis!</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(GlassmorphismCard);
