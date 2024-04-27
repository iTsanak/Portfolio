import React from 'react'
import useScreenSize from './hooks/useScreenSize';


const ResponsiveComponent = ({children}) => {
  const screenSize = useScreenSize();
    
  return (<>
    {children({screenSize})}
  </>)
}

export default ResponsiveComponent