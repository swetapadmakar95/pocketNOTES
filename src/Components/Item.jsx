import React, { useContext } from 'react'
import styles from './CSS/Item.module.css'
import { NContext } from '../Context/NotesContext'
const Item = (props) => {
    const { getInitials, data, setSelectedGroup } = useContext(NContext);
    const color = (Object.values(data).find((item) => (item.name === props.name))).color
    // const inlineStyle = { "backgroundColor": color, "width": "40px", "height": "40px", "border-radius": "50%", "text-align": "center", }
    const inlineStyle = { "backgroundColor": color, }
    return (
        <div className={styles.itemContainer}>

            <div className={styles.inContainer} onClick={() => { setSelectedGroup(props.name) }}>
                <span className={styles.initials} style={inlineStyle} >{getInitials(props.name)}</span> <span className={styles.name} >{props.name}</span>
            </div>
        </div>
    )
}

export default Item
