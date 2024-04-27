import React from 'react'

const ResponsiveComponent = ({children}) => {

    const ResponsiveComponent = ({children}) => {
        const screenSize = useScreenSize();
    }

  return (<>
    {children({screenSize})}
  </>)
}

export default ResponsiveComponentchildren