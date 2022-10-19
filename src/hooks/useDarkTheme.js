import { useState, useEffect } from "react";


export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
         const item = localStorage.getItem(key)
         return item? JSON.parse(item): initialValue;
        } catch (err) {
          console.log(err);
          return initialValue
        }
    })
    
    const setValue = (value) => {
    const valueToStore = value instanceof Function? value(storedValue) : value;
     setStoredValue(value)
    localStorage.setItem('dark-theme', JSON.stringify(valueToStore))
    }
    console.log(storedValue);
    return [storedValue, setValue]
}

const useDarkMode = () => {
    const [enabled, setEnabled] = useLocalStorage('dark-theme')
    const isEnabled = typeof enabledState === 'undefined' && enabled;

    useEffect(()=> {
      const bodyClass = document.body

      isEnabled? bodyClass.classList.add('dark'): bodyClass.removeAttribute('class')

    },[isEnabled, setEnabled] )



    return[enabled, setEnabled]
}

export default useDarkMode