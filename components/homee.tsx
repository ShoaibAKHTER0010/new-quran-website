'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import React from 'react'

const Homee = () => {
  return (
    <section id="home" className='w-full overflow-hidden' style={{
        backgroundImage: "url('./images/bg-main.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        
    }}>
        <main className='max-w-7xl mx-auto flex flex-col justify-center items-center carousel'>
            {/* main div */}
            <div className='w-full py-32  max-w-6xl'>
              {/* my caruosel */}
          <Carousel plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}>
                
  <CarouselContent>
    <CarouselItem>  
                <div className="flex flex-col justify-center items-center">
                   {/* first div */}
                <div>
                 <p className="text-center text-white text-[20px] md:text-[25px] font-bold font-['Roboto Slab'] leading-[30.50px] md:leading-[37.50px]">The Quran: A Journey to the Heart of Islam</p>
                 <h2 className="text-center text-white text-[40px] md:text-[58px] font-bold font-['Roboto Slab'] leading-[70px] md:leading-[87px] py-8">A Complete Online Quran Learning Experience</h2>
                 <p className="text-center text-white text-[20px] md:text-[25px] font-bold font-['Roboto Slab'] leading-[30.50px]leading-[37.50px]">Quran Learning Online: Classes for Everyone, Anywhere</p>
                </div>
                 {/* second div */}
                 <div className='flex gap-6 py-14'>
                  {/* child-one */}
                  <button className=" rounded-[15px] text-center text-white hover:bg-emerald-800 text-base font-normal font-['Roboto Slab'] leading-relaxed border border-white p-3">Register Now</button>
      
                  {/* child-two */}
                  
                    <button className=" relative bg-emerald-700 hover:bg-emerald-800 rounded-[15px] text-center text-white text-base font-normal font-['Roboto Slab'] leading-relaxed p-3">Start Free Trial</button>
                  

                </div>
                </div>
                </CarouselItem>
                {/* two */}
    <CarouselItem>
    <div className="flex flex-col justify-center items-center">
                   {/* first div */}
                <div>
                 <p className="text-center text-white text-[20px] md:text-[25px] font-bold font-['Roboto Slab'] leading-[30.50px] md:leading-[37.50px]">Learn the Quran, your way</p>
                 <h2 className="text-center text-white text-[40px] md:text-[58px] font-bold font-['Roboto Slab'] leading-[70px] md:leading-[87px] py-8">Discover your Own Path to Peace & Knowledge</h2>
                 <p className="text-center text-white text-[20px] md:text-[25px] font-bold font-['Roboto Slab'] leading-[30.50px] md:leading-[37.50px]">Quran Learning Classes: We’re the World’s Best!</p>
                </div>
                 {/* second div */}
                 <div className='flex gap-6 py-14'>
                  {/* child-one */}
                  <button className=" rounded-[15px] text-center text-white hover:bg-emerald-800 text-base font-normal font-['Roboto Slab'] leading-relaxed border border-white p-3">Register Now</button>
      
                  {/* child-two */}
                  
                    <button className=" relative bg-emerald-700 hover:bg-emerald-800 rounded-[15px] text-center text-white text-base font-normal font-['Roboto Slab'] leading-relaxed p-3">Start Free Trial</button>
                  

                </div>
                </div>
       </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

              

              

            </div>
        </main>
    </section>
  )
}

export default Homee