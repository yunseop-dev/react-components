import React from 'react';
import styles from "./RotatingImageGallery.module.css"
const images = [
    'https://images.unsplash.com/photo-1624069452304-e2f2b6d90233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjc4NDU2MA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1624471325375-995d4fdb877f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjc4NDYyMw&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1624517607337-51189b6d9002?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjc4NDYzMw&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1626379461362-ad730c620569?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjc4NDY0Mg&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1625846194966-0f7e5f3f8594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjc4NDY1MQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1625681651221-5f8c12ac99a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjc4NDY1OQ&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1626299748494-939f18cf52be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjc4NDY3MA&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1626301899797-ce0213e058df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjc4NDY4MA&ixlib=rb-1.2.1&q=80&w=1080'
]

const RotatingImageGallery: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                {images.map((item, i) =>
                    <span key={i} style={{ transform: `rotateY(${45 * (i + 1)}deg) translateZ(400px)` }}>
                        <img src={item} alt={`my-pic ${i}`} />
                    </span>
                )}
            </div >
        </div>
    );
}

export default React.memo(RotatingImageGallery);
