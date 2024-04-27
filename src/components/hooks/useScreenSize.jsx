"use client"

import { useState, useEffect } from 'react';

const  useScreenSize = () => {

    const [ScreenSize, setScreenSize] = useState();

    useEffect(() => {
        function getScreenSize() {
            return window.innerWidth;
        }
        
        function handleResize() {
            setScreenSize(getScreenSize());
        }

        handleResize();
        window.addEventListener('resize', handleResize);    
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return ScreenSize;
}

export default useScreenSize;