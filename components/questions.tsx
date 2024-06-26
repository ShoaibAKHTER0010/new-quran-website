'use client'

import { useState } from 'react';
import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { AiFillCaretUp } from "react-icons/ai";

const Questions = () => {

  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (id: number) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <section className='w-full py-16'>
        <main className='mx-auto max-w-7xl'>
            {/* main div */}
            <div className='flex gap-12 '>
                {/* first-div */}
                <div className=' w-full md:w-full lg:w-1/2 flex flex-col gap-12'>
                 {/* child-1 */}
                 <div>
                    <img src="./images/msg.png" alt="logo" />
                    <h2 className="text-neutral-800 text-[35px] font-bold font-['Roboto Slab'] leading-[45.50px] py-4">Frequently Asked Questions</h2>
                     </div>

                     {/* second-child */}
                     <div className="bg-slate-200 px-0 md:px-6  flex flex-col gap-16  py-10 flex-wrap overflow-hidden ">
                      
                       
                        {/* question-1 */}
      <div className="mb-4">
        <button
          className=" text-neutral-800 text-xl font-bold font-['Roboto Slab'] leading-[30px] bg-white py-6 px-2 md:px-8 w-[519px] md:w-full lg:w-[519px] flex  gap-4 md:gap-16  "
          onClick={() => toggleQuestion(1)}
        >
          <p>Who can enroll in “to Learn Quran <br /> Online” 
          courses?</p>
          {!openQuestion?(
            <AiFillCaretDown className='h-8 ' />
          ) : (
            <AiFillCaretUp className='h-8 ' />
          )
        }
        </button>
        <div className={`${openQuestion === 1 ? 'block' : 'hidden'} text-gray-700 text-base font-normal font-['Roboto Slab'] leading-relaxed px-4 py-10`}>
        Everyone can enroll in our courses, from kids to adults  who <br />
        are willing to learn Quran online.
        </div>
      </div>

      {/* question-2 */}
      <div className="mb-4">
        <button
          className=" text-neutral-800 text-xl font-bold font-['Roboto Slab'] leading-[30px] bg-white py-6 px-8 w-[519px] flex  gap-4 md:gap-16  "
          onClick={() => toggleQuestion(2)}
        >
          Is there a trial period available for <br /> these 
          Quran classes?
          {!openQuestion?(
            <AiFillCaretDown className=' h-8 ' />
          ) : (
            <AiFillCaretUp className='h-8' />
          )
        }
        </button>
        <div className={`${openQuestion === 2 ? 'block' : 'hidden'} text-gray-700 text-base font-normal font-['Roboto Slab'] leading-relaxed px-4 py-10`}>
          You can install Tailwind CSS via npm or yarn, or use the CDN link to include it in your project.
        </div>
      </div>

      {/* question-3 */}
      <div className="mb-4">
        <button
          className=" text-neutral-800 text-xl font-bold font-['Roboto Slab'] leading-[30px] bg-white py-6 px-8 w-[519px] flex  gap-4 md:gap-16 "
          onClick={() => toggleQuestion(3)}
        >
         Can I schedule classes according <br /> to my
         kid’s availability?
         {!openQuestion?(
            <AiFillCaretDown className='h-8  ' />
          ) : (
            <AiFillCaretUp className='h-8  ' />
          )
        }
        </button>
        <div className={`${openQuestion === 3 ? 'block' : 'hidden'} text-gray-700 text-base font-normal font-['Roboto Slab'] leading-relaxed px-4 py-10`}>
          You can install Tailwind CSS via npm or yarn, or use the CDN link to include it in your project.
        </div>
      </div>

       {/* question-4 */}
      <div className="mb-4">
        <button
          className=" text-neutral-800 text-xl font-bold font-['Roboto Slab'] leading-[30px] bg-white py-6 px-8 w-[519px] flex gap-4 md:gap-16 "
          onClick={() => toggleQuestion(4)}
        >
        What courses does the Pak Quran <br /> Academy
        offer?
        {!openQuestion?(
            <AiFillCaretDown className='h-8  ' />
          ) : (
            <AiFillCaretUp className='h-8 ' />
          )
        }
        </button>
        <div className={`${openQuestion === 4 ? 'block' : 'hidden'} text-gray-700 text-base font-normal font-['Roboto Slab'] leading-relaxed px-4 py-10`}>
          You can install Tailwind CSS via npm or yarn, or use the CDN link to include it in your project.
        </div>
      </div>

      {/* question-5 */}
      <div className="mb-4">
        <button
          className=" text-neutral-800 text-xl font-bold font-['Roboto Slab'] leading-[30px] bg-white py-6 px-8 w-[519px] flex  gap-4 md:gap-16 "
          onClick={() => toggleQuestion(5)}
        >
        What is the duration of each class <br />  with the
        Online Quran Teacher?
        {!openQuestion?(
            <AiFillCaretDown className='h-8 '/>
          ) : (
            <AiFillCaretUp className='h-8 ' />
          )
        }
        </button>
        <div className={`${openQuestion === 5 ? 'block' : 'hidden'} text-gray-700 text-base font-normal font-['Roboto Slab'] leading-relaxed px-4 py-10`}>
          You can install Tailwind CSS via npm or yarn, or use the CDN link to include it in your project.
        </div>
      </div>



          


                     </div>

                </div>

                {/* second-div */}
                <div className='w-1/2 hidden md:flex '>
                 <img src="./images/Image.png" alt="img" />
                </div>

            </div>
        </main>
    </section>
  )
}

export default Questions