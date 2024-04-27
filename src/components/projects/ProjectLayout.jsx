import Link from 'next/link';
import React from 'react'
import {motion} from 'framer-motion';

const item = {
  hidden: {opacity: 0, y:100},
  show: {opacity: 1, y:0}
};

const NavLink = motion(Link);

const ProjectLayout = ({name, description, date, demoLink}) => {
  //Date formatting for the projects
  const formattedDate = new Date(date).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' });

  return (
    <NavLink
     variants={item}
     href={demoLink}
     target={"_blank"}
      className='text-sm md:text-base flex flex-col items-start justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center space-x-2'>
          <h2 className='text-foreground overflow-ellipsis whitespace-nowrap'>{name}</h2>
        </div>
        <div className='self-end flex-1 mx-2 mb-1 bg-transparent border border-b border-dashed border-muted'/>
        <p className='text-muted sm:text-foreground'>{formattedDate}</p>
      </div>
      <div className='w-full'>
        <p className='text-muted text-left'>{description}</p>
      </div>
    </NavLink>
  );
}

export default ProjectLayout
