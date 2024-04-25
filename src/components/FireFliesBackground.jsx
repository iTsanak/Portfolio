"use client"
import React, { use, useEffect, useState } from 'react'

// Create a firefly with random position and animation duration
const createFireFly = () => ({
  id: Math.random(),
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  animationDuration: `${Math.random() * 5 + 5}s`,
});

// FireFliesBackground component
const FireFliesBackground = () => {
  const [fireflies, setFireflies] = useState([])

  
  useEffect(() => {
    const addFireflyPeriodically = () => {
      const newFirefly = createFireFly();
      setFireflies(currentFireflies => [...currentFireflies.slice(-14), newFirefly]);
    }
    // Add a new firefly every second
    const interval = setInterval(addFireflyPeriodically, 1000);
    return () => clearInterval(interval);

  },[]);

  return (
    <div className='fixed top-0 left-0 w-full h-full -z-10 overflow-hidden'>
            {fireflies.map((firefly) =>{
              return (
                <div key={firefly.id} 
                className='absolute rounded-full bg-accent w-[20px] h-[20px]'
                style={
                  {
                    top: firefly.top,
                    left: firefly.left,
                    animation: `move ${firefly.animationDuration} infinite alternate`,
                  }
                }>
                  
                </div>
              );
            })}
          </div>
        )
      }

export default FireFliesBackground