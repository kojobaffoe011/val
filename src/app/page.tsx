'use client'

import * as React from "react";
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle"
import { OpenDrawer } from "@/components/open-drawer"
import { Pacifico } from 'next/font/google';

const dancingScript = Pacifico({ subsets: ['latin'], weight: '400' });

const images = ['/bear.svg', '/love.svg', '/love_annex.svg']
 
const NotificationCarousel = () => {
  const [currentNotification, setCurrentNotification] = React.useState(0);
  const [fadeClass, setFadeClass] = React.useState("fade-in");

  React.useEffect(() => {
    // Set up an interval to rotate through the notifications
    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentNotification(
          (prevNotification) => (prevNotification + 1) % images.length
        );
        setFadeClass("fade-in");
      }, 500); // Half a second, time for fade-out animation
    }, 4000); // 5 seconds

    // Cleanup: clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images?.length > 0 && (
        <div className="flex items-center justify-center mb-2">
          <div
            className={`transition-opacity duration-500 ${fadeClass}`}
          >
              <Image
              src={images[currentNotification]}
              width={500}
              height={500}
              className="rounded-md"
              alt="Picture of the author"
              />
          </div>
        </div>
      )}
    </>
  );
};

export default function Home() {

  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)">
      <div className="flex justify-end w-full">
        <ModeToggle />
      </div>
      <main className="gap-8 row-start-2 items-center sm:items-start w-full grid grid-cols-2 h-full"> 
        <div className='flex h-full relative w-full'>
          <div className='flex flex-col gap-1 w-full'>
            <div className='flex flex-col gap-8'>
              <p className={`${dancingScript.className} font-extrabold text-6xl`}>Will you be my <span className='text-red-400'>valentine</span>, queen?</p>

              <p>No is not an option, sorry schatz 😘</p>

            </div>
            <div className='mt-8'>
              <OpenDrawer/>
            </div>
            
          </div>
        </div>
        <div className='relative'>
              <NotificationCarousel/>
        </div>
          
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 text-sm"
          href="https://github.com/kojobaffoe011"
          target="_blank"
          rel="noopener noreferrer"
        >
         designed with love by<span><code className='bg-slate-100 p-1 dark:text-gray-600 rounded-md text-xs'>buff</code></span>
        </a>
     
      </footer>
    </div>
  );
}
