import { useState } from "react"



export const useLocalStorage = (key, obj) => {
    const [state, setState] = useState(() => {
        const data = localStorage.getItem(key);

        if(data !== "undefined") {
            const persistedStorage = JSON.parse(data);

            return persistedStorage;
        }

        return obj;
    });


    const setLocalStorage = (data) => {
        setState(data);

        localStorage.setItem(key, JSON.stringify(data));
    }


    return [
        state,
        setLocalStorage
    ]
}

