
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";

export default async function Home() {
 const session = await auth();
 console.log("session: "+session)
 return (
  <div className="flex bg-[#fffc00] dark:bg-black ">
   <div className=" min-h-screen flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
    <Navbar />
    <main className='flex flex-1 flex-col md:flex-row items-center justify-center px-8 mt-4'>
     <div className='flex-1 md:text-left text-center h-full'>
      <h1 className='text-4xl md:text-6xl font-bold text-black dark:text-[#fffc00]'>SnapNext 4 programmers!</h1>
      <p className='mt-4 text-xl font-semibold text-gray-800 dark:text-[#fffc00]'>
       Share your code with your friends to get feedback and improve your code.
      </p>
      <div className='mt-4'>
       <p className='mt-2 text-lg font-semibold text-gray-700 dark:text-[#fffc00]'>What are you waiting for?</p>
      </div>
      {!session ? (
       <Button
        asChild
        className='mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0'
       >
        <Link href={"/login"} className='max-w-max'>
         <Image src='/logo.svg' width={20} height={20} alt='Snapchat logo' />
         Log in to explore
        </Link>
       </Button>
      ) : (
       <Button
        asChild
        className='mt-4 bg-black text-white flex items-center rounded-lg gap-2 mx-auto md:mx-0'
       >
        <Link href={"/chat"} className='max-w-max'>
         <Image src='/logo.svg' width={20} height={20} alt='Snapchat logo' />
         Start chatting
        </Link>
       </Button>
      )}
     </div>
     <div className='flex-1 md:w-full md:flex'>
      <Image alt='Avatar' width={651} height={621} src='/hero.png' />
     </div>
    </main>
   </div>
  </div>
 );
}







