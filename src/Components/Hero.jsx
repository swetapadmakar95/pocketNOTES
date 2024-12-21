import React from 'react'
import styles from './CSS/Hero.module.css'
import lockSign from './Assets/lock.png'
import rightImage from './Assets/rightContainerHome.png';
const Hero = () => {
    return (
        <div className={styles.right_container}>
            <img src={rightImage} alt="" />
            <h1>Pocket Notes</h1>
            <p>Send and receive messages without keeping your phone online.</p>
            <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <div className={styles.encrypted}>
                <p><img src={lockSign} alt="" />   end-to-end encrypted</p>
            </div>
        </div>
    )
}

export default Hero
