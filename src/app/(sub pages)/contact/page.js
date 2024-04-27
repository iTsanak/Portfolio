import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import RenderModel from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import Form from "@/components/contact/Form";


export default function Contact() {
  return (
    <>
      <Image src={bg} alt="background-image"  className="-z-50 fixed top-0 left-0 w-full
       h-full object-cover object-center opacity-25" />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full  sm:*:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Summon the Mage
          </h1>
          <p className="text-center font-light text-sm xs:text-base max-w-xl">
          Greetings, noble traveler of the digital realm! Step into the enchanted circle and let your words
          weave spells across the cosmic tapestry. Whether you seek to forge alliances, unlock ancient 
          mysteries, or simply share your adventures, your messages are precious scrolls in this mystical domain.

          Use the form below to send your missives through the ethereal network, and await the whisper of magic 
          in response. 
          </p>
        </div>
        <Form />
      </article>
        
      
    </>
  );
}
