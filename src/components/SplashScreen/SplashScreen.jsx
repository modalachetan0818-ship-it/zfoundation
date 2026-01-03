import React from 'react';
import styles from './SplashScreen.module.css';

const SplashScreen = () => {
    return (
        <div className={styles.splashContainer}>
            <div className={styles.loader}>
                <div className={styles.circleOuter}></div>
                <div className={styles.circleInner}></div>
            </div>
        </div>
    );
};

export default SplashScreen;
