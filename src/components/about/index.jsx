import clsx from 'clsx'
import React from 'react'

const ItemLayout = ({children, className}) => {
    return <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center space-y-8', className)}>
            {children}
        </div>
}

const AboutDetails = () => {
  return (
    <section className='py-15 w-full'>
        <div className='grid grid-cols-12 gap-8 w-full'>

            <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
            <h2 className='text-2xl text-left w-full capitalize'>
                Software Wizard and Developer
            </h2>
            <p className='font-light'>
            Greetings, fellow travelers of the digital realm! I am a skilled software wizard, adept in the arcane arts
             of Python, C++, C, JavaScript, TypeScript, HTML, Node.js, React, Express, NoSQL, SQL, and Git. My magical 
             wand dances effortlessly through the realms of Azure, OOP, MongoDB, unit testing, API integration, Jira, 
             Unix/Linux, DaisyUI, Tailwind CSS and crafting spells of software excellence.
            <br/>
            <br/>
            I have woven intricate spells of frontend, backend, and full-stack development, 
            mastering the art of software development and the enchantments of variosu software tools and frameworks. My most notable creation is a user-friendly 
            social media platform, crafted with React.js, TypeScript, React Query, Tailwind CSS, and Appwrite. This enchanted 
            platform boasts robust authentication and features such as Home Page, Like, Edit, Follow, Save, Detailed Post Page, 
            Profile Page, and Browse Other and popular Users, all designed to delight and engage users.
            <br/>
            <br/>
            Join me on a magical journey of innovation and excellence in software development, where every line of code is
            a spell waiting to be cast, and every project is a new adventure into the realms of possibility!
            </p>
            </ItemLayout>

            <ItemLayout className={'col-span-4 text-accent'}>
            <div className='font-semibold w-full text-left text-5xl '>
                10+ <sub className='font-semibold text-base'>Projects</sub>
            </div>
            </ItemLayout>

            <ItemLayout className={'col-span-4 text-accent'}>
            <div className='font-semibold w-full text-left text-5xl '>
                2+ <sub className='font-semibold text-base'>Years of experience</sub>
            </div>
            </ItemLayout>

            <ItemLayout className={'col-span-4 !p-0'}>
                <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs/?username=iTsanak&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&hide_rank=true' alt='iTsanak' loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-8 !p-0'}>
                <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=iTsanak&theme=transparent&hide_border=true&title_color= &text_color=FFFFFF&hide_rank=true' alt='iTsanak' loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-full'}>
                <img className='w-full h-auto' src='https://skillicons.dev/icons?i=python,cpp,c,mongodb,postgres,react,ts,nextjs,nodejs,azure,html,tailwind,css,js,express,linux,git,figma,github,wordpress' alt='iTsanak' loading='lazy' />
            </ItemLayout>

            <ItemLayout className={'col-span-6 !P-0'}>
                <img src="https://github-readme-streak-stats.herokuapp.com?user=iTsanak&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt='iTsanak' loading='lazy' />
            </ItemLayout>
        </div>    
    </section>
  )
}

export default AboutDetails