"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton';

// Divide the circle in (8) equal parts 
const angleIncrement = 360 / BtnList.length;

const Navigation = () => {
    return (
    <div className='w-full fixed h-screen flex items-center justify-center'>
        <div className='w-max flex items-center justify-center relative hover:pause animate-spin-slow group'>
        {
            BtnList.map((btn, index) => {
                // Convert the angle to radians for different button button by multiplying with the index
                const angleRad = (angleIncrement * index * Math.PI) / 180;
                const radius = 'calc(20vw - 1rem)';
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