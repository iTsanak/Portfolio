"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton';
import useScreenSize from '../hooks/useScreenSize';
import ResponsiveComponent from '../ResponsiveComponent';
import {motion, stagger} from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const Navigation = () => {

    // Divide the circle in (8) equal parts 
    const angleIncrement = 360 / BtnList.length;
    const screenSize = useScreenSize(); 
    
    // Check the screen size for mobile and desktop for responsiveness
    const isLarge = screenSize >= 1024;
    const isMedium = screenSize >= 768 && screenSize < 1024;


    return (
        <div className='w-full fixed h-screen flex items-center justify-center z-50'>
            <ResponsiveComponent>
            {
                ({screenSize}) => {
                    return screenSize && screenSize >= 480 ? (
                        <motion.div 
                        variants={container}
                        initial='hidden'
                        animate='show'
                        className='w-max flex items-center justify-center relative hover:pause 
                        animate-spin-slow group'>
                            {
                                BtnList.map((btn, index) => {
                                    // Convert the angle to radians for different button button by multiplying with the index
                                    const angleRad = (angleIncrement * index * Math.PI) / 180;
                                    const radius = isLarge 
                                    ? 'calc(20vw - 1rem)' 
                                    : isMedium 
                                    ? 'calc(30vw - 1rem)' 
                                    : 'calc(40vw - 1rem)';
                                    const x = `calc(${radius} * ${Math.cos(angleRad)})`;
                                    const y = `calc(${radius} * ${Math.sin(angleRad)})`;

                                    return <NavButton key={btn.label} x={x} y={y} {...btn} />
                                })
                            }
                        </motion.div>
                    ) : (
                    <>
                        <motion.div 
                        variants={container}
                        initial='hidden'
                        animate='show' 
                        className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4
                         item-start xs:items-center justify-center relative group'>
                            {
                                BtnList.slice(0, BtnList.length/2).map((btn, index) => {
                                    return <NavButton key={btn.label} x={0} y={0} {...btn} />
                                })
                            }
                        </motion.div>

                        <motion.div 
                        variants={container}
                        initial='hidden'
                        animate='show'
                        className='w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end
                         xs:items-center justify-center relative group'>
                            {
                                BtnList.slice(BtnList.length/2, BtnList.length).map((btn, index) => {
                                    return <NavButton key={btn.label} x={0} y={0} {...btn} labelDirection='left' />
                                })
                            }
                        </motion.div>
                    </>
                    )
                }
            }
            </ResponsiveComponent>
        </div>
    )
}

export default Navigation