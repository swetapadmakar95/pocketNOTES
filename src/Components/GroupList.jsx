import React, { useContext } from 'react'
import Item from './Item'
import { NContext } from '../Context/NotesContext'
const GroupList = () => {
    const { data } = useContext(NContext);
    return (
        <div>
            {(data).map((item, i) => {
                return <Item key={i} name={item.name} />
            })}
        </div>
    )
}

export default GroupList
