import React, { useState } from 'react'
import styles from './CSS/Editorpage.module.css'
import Item from './Item'
import { useContext, useEffect } from 'react'
import Post from './Post'
import { NContext } from '../Context/NotesContext'
import Enter from './Assets/Enter.png'
const Editorpage = (props) => {
    const { getInitials, data, getCurrentTime, addPost, setData } = useContext(NContext);
    const [postData, setPostData] = useState({ description: "" });
    const [filteredPosts, setFilteredPosts] = useState([]);
    const color = (Object.values(data).find((item) => (item.name === props.name))).color
    const inlineStyle = {
        "backgroundColor": color, "width": "38px", "height": "38px", "border-radius": "50%", "text-align": "center", "font-size": "18px",
    }

    useEffect(() => {
        const filteredData = Object.values(data).filter(item => item.name === props.name);
        const posts = filteredData.length > 0 ? filteredData[0].post : [];
        setFilteredPosts(posts);
    }, [data, props.name]);
    const newItem = {}
    return (
        <div className={styles.container}>
            <div className={styles.heading}>
                <span className={styles.Initials}>
                    {/* {console.log(inlineStyle)} */}
                    <span className={styles.inner_initials} style={inlineStyle}>{getInitials(props.name)}</span>
                </span>
                <span className={styles.names}>
                    {props.name}
                </span>
            </div>
            <div className={styles.post}>
                {filteredPosts.map((item, i) => {
                    return <Post posts={item} key={i} />
                })
                }
            </div>
            <div className={styles.editor}>
                <div className={styles.editor_box}>
                    <textarea type="text" value={postData.description} onChange={(e) => { setPostData(e.target.value) }} placeholder='Enter your text here ..........' />
                    <img src={Enter} onClick={() => {
                        if (postData.description != '') {
                            newItem["name"] = props.name;
                            newItem["description"] = postData;
                            newItem["date"] = getCurrentTime().date;
                            newItem["time"] = getCurrentTime().time;
                            addPost(props.name, data, newItem, setData)

                        }
                        setPostData({ description: '' })
                    }} alt="" />

                </div>

            </div>
        </div >
    )
}

export default Editorpage
