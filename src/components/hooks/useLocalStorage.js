//DATA SECTION
import {useState} from 'react';


//LOGIC section

const useLocalStorage = (key, initialValue) => {
    const [state,setState] = useState(()=>{
         //okay so this line says 'if there is something in local storage, return (set) it to our state
       
        if (localStorage.getItem(key)) {
            return JSON.parse(localStorage.getItem(key));
        }
        localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
    });

    const setStoredState = (value)=>{
        localStorage.setItem(key,JSON.stringify(value));
        setState(value);
    }

    return ([state,setStoredState]);
}

//RETURN PSEUD 'EXPORT' section
export default useLocalStorage;