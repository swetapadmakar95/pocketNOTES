import { createContext, useState } from "react"

// import data_product from "../Components/Assets/data";

const getCurrentTime = () => {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    const currentDate = now.toISOString().split('T')[0];

    const formattedTime = `${hours}:${formattedMinutes}:${formattedSeconds} ${period}`;

    return {
        date: currentDate,
        time: formattedTime,
    };
};

const getInitials = (name) => {
    const words = name.trim().split(' ');
    let initials = '';
    initials += words[0].charAt(0).toUpperCase()
    initials += words[words.length - 1].charAt(0).toUpperCase()
    return initials;
};


const NotesKey = 'data';
const getLocalStorage = () => {
    const rawData = localStorage.getItem(NotesKey);
    if (rawData === null) return [];

    return JSON.parse(rawData);
}

const setLocalStorage = (data) => {

    return localStorage.setItem(NotesKey, JSON.stringify(data))
}

const addPost = (name, data, postData, setData) => {
    // const requiredObjectPostArray = Object.values(data).find((item) => item.name === name)[0].post;
    // if (requiredObjectPostArray) {
    //     const newPost = [...requiredObjectPostArray, postData];
    //     Object.values(data).filter((item) => item.name === name)[0].post = newPost

    //     setData(data);
    //     setLocalStorage(data)
    // }
    const updatedData = [...data]; //shallow copy
    const target = Object.values(data).find((item) => item.name === name)
    if (target) {
        target.post.push(postData)
    }
    setData(updatedData)
    setLocalStorage(data)
}

export const NContext = createContext({
    data: [],
    getInitials: () => { },
    getCurrentTime: () => { },
    setSelectedNote: () => { },
    setData: () => { },
    setLocalStorage: () => { },
    NotesKey: "",
    selectedGroup: "",
    setSelectedGroup: () => { },
    addPost: () => { }
})


const NContextProvider = (props) => {
    const [data, setData] = useState(() => getLocalStorage())
    const [selectedGroup, setSelectedGroup] = useState("");
    return (
        < NContext.Provider value={{ data, getInitials, getCurrentTime, setData, setLocalStorage, NotesKey, selectedGroup, setSelectedGroup, addPost }}>
            {props.children}
        </NContext.Provider >
    );
}

export default NContextProvider;