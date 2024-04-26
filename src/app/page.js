import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative ">
      <Image src={bg} alt="background-image" fill className="w-full h-full object-cover object-center opacity-20  " />
    
      <div className="w-full h-screen">
        {/* nav and 3d model*/}
        <Navigation />
        
        <div className="w-full h-screen absolute top-1/2 -translate-y-1/2 left-0 ">
          <RenderModel>
            <Wizard/>
          </RenderModel>
        </div>
        

      </div>
    </main>
  );
}
