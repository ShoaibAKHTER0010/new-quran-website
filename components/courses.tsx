import React from 'react'

const Courses = () => {
  return (
    <section id='courses' className='w-full py-16'>
        <main className='mx-auto max-w-7xl'>
            {/* main-div */}
            <div className='w-full'>
                <h2 className="text-center text-neutral-800 text-[33px] font-bold font-['Roboto Slab'] leading-[45.50px] ">We Offer Many Courses to <span className="text-amber-400" >Learn Quran Online</span></h2>
                {/* cards-section */}
                <div className='py-16 flex flex-col gap-10 '>
                  {/* first-div */}
                  <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
                    {/* card-1 */}
                    <div className='bg-[#007F5F] w-full md:w-auto flex flex-col justify-center items-center gap-4 p-4 rounded-xl pb-6' style={{
        backgroundImage: "url('./images/cor-bg.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        
    }}>
                      <img src="./images/courses-log/cor-1.png" alt="img" />
                      <p className="text-white text-xl font-bold font-['Roboto Slab'] leading-[30px]">Learn Basic Noorani Qaida Online</p>
                      {/* button sec */}
                      <button className=" rounded-[15px] text-center text-white hover:bg-emerald-800 text-base font-normal font-['Roboto Slab'] leading-relaxed border border-white p-3">Register Now</button>

                    </div>
                    
                    {/* card-2 */}
                    <div className='bg-[#007F5F] w-full md:w-auto flex flex-col justify-center items-center gap-4 p-4 rounded-xl pb-6' style={{
        backgroundImage: "url('./images/cor-bg.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        
    }}>
                      <img src="./images/courses-log/cor-2.png" alt="img" />
                      <p className="text-white text-xl font-bold font-['Roboto Slab'] leading-[30px]">Learn to Recite Quran Online</p>
                      {/* button sec */}
                      <button className=" rounded-[15px] text-center text-white hover:bg-emerald-800 text-base font-normal font-['Roboto Slab'] leading-relaxed border border-white p-3">Register Now</button>

                    </div>

                    {/* card-3 */}
                    <div className='bg-[#007F5F] w-full md:w-auto flex flex-col justify-center items-center gap-4 p-4 rounded-xl pb-6' style={{
        backgroundImage: "url('./images/cor-bg.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        
    }}>
                      <img src="./images/courses-log/cor-3.png" alt="img" />
                      <p className="text-white text-xl font-bold font-['Roboto Slab'] leading-[30px]">Quran Memorization Online</p>
                      {/* button sec */}
                      <button className=" rounded-[15px] text-center text-white hover:bg-emerald-800 text-base font-normal font-['Roboto Slab'] leading-relaxed border border-white p-3">Register Now</button>

                    </div>

                  </div>

                  {/* second-div */}
                  <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
                    {/* card-1 */}
                    <div className='bg-[#007F5F] w-full md:w-auto flex flex-col justify-center items-center gap-4 p-4 rounded-xl pb-6' style={{
        backgroundImage: "url('./images/cor-bg.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        
    }}>
                      <img src="./images/courses-log/cor-4.png" alt="img" />
                      <p className="text-white text-xl font-bold font-['Roboto Slab'] leading-[30px]">Learn Basic Noorani Qaida Online</p>
                      {/* button sec */}
                      <button className=" rounded-[15px] text-center text-white hover:bg-emerald-800 text-base font-normal font-['Roboto Slab'] leading-relaxed border border-white p-3">Register Now</button>

                    </div>
                    
                    {/* card-2 */}
                    <div className='bg-[#007F5F] w-full md:w-auto flex flex-col justify-center items-center gap-4 p-4 rounded-xl pb-6' style={{
        backgroundImage: "url('./images/cor-bg.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        
    }}>
                      <img src="./images/courses-log/cor-5.png" alt="img" />
                      <p className="text-white text-xl font-bold font-['Roboto Slab'] leading-[30px]">Learn to Recite Quran Online</p>
                      {/* button sec */}
                      <button className=" rounded-[15px] text-center text-white hover:bg-emerald-800 text-base font-normal font-['Roboto Slab'] leading-relaxed border border-white p-3">Register Now</button>

                    </div>

                    {/* card-3 */}
                    <div className='bg-[#007F5F] w-full md:w-auto flex flex-col justify-center items-center gap-4 p-4 rounded-xl pb-6' style={{
        backgroundImage: "url('./images/cor-bg.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        
    }}>
                      <img src="./images/courses-log/cor-6.png" alt="img" />
                      <p className="text-white text-xl font-bold font-['Roboto Slab'] leading-[30px]">Quran Memorization Online</p>
                      {/* button sec */}
                      <button className=" rounded-[15px] text-center text-white hover:bg-emerald-800 text-base font-normal font-['Roboto Slab'] leading-relaxed border border-white p-3">Register Now</button>

                    </div>

                  </div>

                </div>

            </div>
        </main>
    </section>
  )
}

export default Courses