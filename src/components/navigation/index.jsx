"use client"
import { BtnList } from '@/app/data'
import React from 'react'

// Divide the circle in (8) equal parts 
const angleIncrement = 360 / BtnList.length;

const Navigation = () => {
    return (
    <div className='flex items-center justify-between relative'>
        {
            BtnList.map((btn, index) => {
                // Convert the angle to radians
                const angleRad = (angleIncrement * index * Math.PI) / 180;
                const radius = 'calc(20vw - 1rem)';
                const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                console.log(angleRad, radius, x, y);
                return <button key={index} className='absolute' style={{transform: `translate(${x}, ${y})`}}>
                    {btn.label}</button>
            })
        }
        </div>
    )
}

export default Navigation