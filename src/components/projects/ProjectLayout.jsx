import Link from 'next/link';
import React from 'react'

const ProjectLayout = ({name, description, date, demoLink}) => {
  return (
    <Link href={demoLink} target={"_blank"} className='flex flex-col items-start justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center space-x-2'>
          <h2 className='text-foreground overflow-ellipsis whitespace-nowrap'>{name}</h2>
        </div>
          <div className='self-end flex-1 mx-2 mb-1 bg-transparent border border-b border-dashed border-muted'/>
          <p className='text-foreground'>{new Date(date).toDateString()}</p>
      </div>
      <div className='w-full'>
        <p className='text-muted text-left'>{description}</p>
      </div>
    </Link>
  );
}

export default ProjectLayout
