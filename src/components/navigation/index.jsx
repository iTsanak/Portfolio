"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton';
import useScreenSize from '../hooks/useScreenSize';


const Navigation = () => {

    // Divide the circle in (8) equal parts 
    const angleIncrement = 360 / BtnList.length;
    const screenSize = useScreenSize(); 
    
    // Check the screen size for mobile and desktop for responsiveness
    const isLarge = screenSize >= 1024;
    const isMedium = screenSize >= 768 && screenSize < 1024;


    return (
    <div className='w-full fixed h-screen flex items-center justify-center z-50'>
        <div className='w-max flex items-center justify-center relative hover:pause animate-spin-slow group'>
        {
            BtnList.map((btn, index) => {
                // Convert the angle to radians for different button button by multiplying with the index
                const angleRad = (angleIncrement * index * Math.PI) / 180;
                const radius = isLarge ? 'calc(20vw - 1rem)' : isMedium ? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)'


                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                return <NavButton key={btn.label} x={x} y={y} {...btn} />
            })
        }
        </div>   
    </div>
    )
}

export default Navigation