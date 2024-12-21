import React, { useContext, useState } from 'react'
import styles from './CSS/Popup.module.css'
import { NContext } from '../Context/NotesContext';
const Popup = (props) => {
    const [group, setGroup] = useState('');
    const [color, setColor] = useState('#B38BFA');
    const { getCurrentTime, data, setData, setLocalStorage, NotesKey } = useContext(NContext);
    const handleCreateGroup = (group) => {
        const newItem = { 'name': group, 'date': getCurrentTime().date, 'time': getCurrentTime().time, 'post': [], 'color': color }
        const new_data = [...data, newItem];
        setData(new_data)
        setLocalStorage(new_data)
    }
    const handleMultiple = (group) => {
        props.onClose()
        handleCreateGroup(group)
    }
    return (
        <div className={styles.modal_wrapper}>
            <div className={styles.modal}>
                <div className={styles.heading}><h2>Create New group</h2></div>
                <div className={styles.group_name}>
                    <h3>Group Name</h3>
                    <input type="text" onChange={(e) => {
                        setGroup(e.target.value)
                    }} placeholder='Enter group name' />
                </div>
                <div className={styles.choose_color}>
                    <h3>Choose colour</h3>
                    <div className={styles.color}>
                        <div className={styles.box} id={styles.color1} onClick={() => {
                            const div = document.getElementById(styles.color1)
                            const backgroundColor = window.getComputedStyle(div).backgroundColor
                            setColor(backgroundColor);
                        }}></div>
                        <div className={styles.box} id={styles.color2} onClick={() => {
                            const div = document.getElementById(styles.color2)
                            const backgroundColor = window.getComputedStyle(div).backgroundColor
                            setColor(backgroundColor);
                        }}></div>
                        <div className={styles.box} id={styles.color3} onClick={() => {
                            const div = document.getElementById(styles.color3)
                            const backgroundColor = window.getComputedStyle(div).backgroundColor
                            setColor(backgroundColor);
                        }}></div>
                        <div className={styles.box} id={styles.color4} onClick={() => {
                            const div = document.getElementById(styles.color4)
                            const backgroundColor = window.getComputedStyle(div).backgroundColor
                            setColor(backgroundColor);
                        }}></div>
                        <div className={styles.box} id={styles.color5} onClick={() => {
                            const div = document.getElementById(styles.color5)
                            const backgroundColor = window.getComputedStyle(div).backgroundColor
                            setColor(backgroundColor);
                        }}></div>
                        <div className={styles.box} id={styles.color6} onClick={() => {
                            const div = document.getElementById(styles.color6)
                            const backgroundColor = window.getComputedStyle(div).backgroundColor
                            setColor(backgroundColor);
                        }}></div>

                    </div>
                </div>
                <div className={styles.btn} >
                    <button onClick={() => handleMultiple(group)}>Create</button>
                    <button onClick={props.onClose}>Close</button>
                </div>
            </div>

        </div >
    )
}

export default Popup
