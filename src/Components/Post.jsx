import React, { useContext } from 'react'
import styles from './CSS/Post.module.css'
import { NContext } from '../Context/NotesContext'
const Post = (props) => {
    return (
        < div className={styles.post_container} >
            <div className={styles.text}>
                <p>{props.posts.description}</p>
            </div>
            <div className={styles.date_time}>
                <span>{props.posts.date} <span className={styles.dot}>.</span> {props.posts.time}</span>
            </div>
        </div >
    )
}

export default Post;
