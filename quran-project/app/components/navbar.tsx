'use client'
import React, { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';

   
const Navbar = () => {
    const Links = [
        { name: "About", link: "#about" },
        { name: "Services", link: "#services" },
        { name: "Cases", link: "#cases" },
        { name: "Blog", link: "#blog" },
        { name: "Works", link: "#works" },
        { name: "Hire", link: "#hire" },
    ];

    const [open, setOpen] = useState(false);

    return (
        <main className='w-full px-12'>
            <div className='w-full top-0 left-0 flex '>
                <div className='flex justify-between  py-4  md:max-w-7xl w-full mx-auto '>
                    
                <img src="./images/fav.png" alt="img" />
                
                        
                    <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    {open ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
                    </div>

                    <ul className={`md:flex bg-emerald-950 md:bg-transparent lg:bg-transparent px-10 md:px-0   absolute md:static text-white md:text-gray-700 md:z-auto left-0 w-full md:w-auto transition-all duration-500 ease-in md:gap-12 gap-8 py-6 md:py-0 ${open ? 'top-20' : '-top-full md:top-0'}`}>
                        <div className='flex md:hidden'>  <img src="./images/fav.png" alt="img" />
                        <p>PAK QURAN</p>
                        <p></p></div>
                        {Links.map((link) => (
                            <li key={link.name} className="hover:text-emerald-500 text-md  text-white md:text-gray-700  font-bold font-['Roboto Slab'] uppercase leading-[18.20px] mt-10  ">
                                <a href={link.link} className=' duration-500'>{link.name}</a>
                            </li>
                        ))}

                       {/* button section */}
                     <div className="text-center hidden md:hidden lg:flex  text-white  text-lg font-medium font-['Roboto Slab'] leading-relaxed ">
                        <button className='bg-amber-400 hover:bg-emerald-700 rounded-[15px]  w-[153.31px] h-[50px] mt-6'>FREE TRIAL</button>
                     </div>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default Navbar;
