import React from 'react'
import styles from "./ElasticLine.module.css"

const ElasticLine: React.FC = () => {
    return (
        <>
            <svg className={styles.svg}>
                <path></path>
            </svg>
            <svg className={styles.svg}>
                <path></path>
            </svg>
        </>
    );
}

export default React.memo(ElasticLine);
