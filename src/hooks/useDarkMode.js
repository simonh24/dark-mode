import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";

export const useDarkMode = (initialValue) => {
    const [someValue, setSomeValue] = useLocalStorage("darkMode", initialValue);
    console.log(someValue);
    useEffect(() => {
        if (someValue === true) {
            document.querySelector("body").classList.add("dark-mode");
        } else {
            document.querySelector("body").classList.remove("dark-mode");
        }
    }, [someValue]);

    return [someValue, setSomeValue];
}