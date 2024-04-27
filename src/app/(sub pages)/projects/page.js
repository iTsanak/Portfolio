"use client"
import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";
import Potion from "@/components/models/Potion";
import useScreenSize from "@/components/hooks/useScreenSize";



export default function Home() {
  // Conditionally render the Potion component based on screen size, use client-side rendering
  const isMobile = useScreenSize() < 1024;

  return (
    <>
      <Image src={bg} alt="background-image"  className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25" />
    
  
        <ProjectList projects={projectsData}/>
        <div className="flex items-center justify-center fixed top-16 lg:top-20 -translate-x-1/2 
        lg:translate-x-0 left-1/2 lg:left-0 h-screen -z-10">
          <RenderModel>
            <Staff/>
          </RenderModel>
        </div>
        <div className={`flex items-center justify-center fixed top-20  
        lg:translate-x-10 lg:right-0 xl:translate-x-0 h-screen -z-10 ${isMobile ? 'hidden' : ''}`}>
          <RenderModel>
            <Potion/>
          </RenderModel>
        </div>
    </>
  );
}
