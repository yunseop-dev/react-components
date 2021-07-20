import React from 'react'
import styles from "./blurCard.module.css"

const BlurCard: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.circle}>
                    <h2>01</h2>
                </div>
                <div className={styles.content}>
                    <h3>Card One</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias velit est soluta cum, ex ea, a maxime ullam unde natus hic nostrum. Debitis et cupiditate ut esse voluptatem nobis facilis!</p>
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default React.memo(BlurCard);
