import React from 'react';
import styles from './IsometricSocialMediaIcon.module.css'
const IsometricSocialMediaIcon: React.FC = () => {
    return <ul className={styles.icons}>
        {['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-linkedin-in', 'fab fa-whatsapp', 'fab fa-instagram'].map(item => <li>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span className={item}></span>
            </a>
        </li>)}
    </ul>
}
export default IsometricSocialMediaIcon