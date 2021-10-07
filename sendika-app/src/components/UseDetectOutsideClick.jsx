import { useState, useEffect } from "react";

export const UseDetectOutsideClick = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState);

    useEffect(() => {
        //if the element is not null and the current element is not the dropdown menu
        const pageClickEvent = (e) => {
            if (el.current !== null && !el.current.contains(e.target)) {
                setIsActive(!isActive);
            }
        };
    
        if (isActive) {
            window.addEventListener('click', pageClickEvent);
        }
    
        return () => {
            window.removeEventListener('click', pageClickEvent);
        }
        
    }, [isActive, el]);

    return [isActive, setIsActive];
}
