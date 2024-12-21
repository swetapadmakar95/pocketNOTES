import styles from './CSS/Home.module.css';
import plusSign from './Assets/plus_sign.png';
import React, { useContext, useEffect, useState } from 'react'
import GroupList from './GroupList';
import Popup from './Popup';
import { NContext } from '../Context/NotesContext';
import Editorpage from './Editorpage';
import Hero from './Hero';
const Home = () => {
    const [showModal, setShowModal] = useState(false);
    const { data, selectedGroup } = useContext(NContext);
    const [showRightContainer, setShowRightContainer] = useState(false);
    useEffect(() => { <GroupList /> }, [data])
    return (
        <div className={`block ${showRightContainer ? styles.show_right_container : ''} ${styles.container}`}>
            {showModal && <Popup onClose={() => setShowModal(false)} onCreate={() => setShowModal(false)} />}
            <div className={styles.left_container}>
                <h1>Pocket Notes</h1>
                <div className={styles.group_name}>
                    <GroupList />
                </div>
                <div className={styles.plus_logo}>
                    <img src={plusSign} onClick={() => setShowModal(true)} alt="" />
                </div>
            </div>

            <div className={styles.right_container}>
                {selectedGroup === '' ? <Hero></Hero> : <Editorpage name={selectedGroup}></Editorpage>}

            </div>


        </div >
    )
}

export default Home
