import React from 'react'

const Vital = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto w-full '>
            {/* main-div */}
            <div className='flex flex-col md:flex-row'>
                {/* fisrt-div */}
                <div className='w-full md:w-1/2 text-center'style={{
      backgroundImage: "url('./images/bg-4.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    
  }}>
               {/* content-div */}
               <div className='py-16 px-6'>
               <h2 className="  text-white text-[32px] md:text-[35px] font-bold font-['Roboto Slab'] leading-[40.50px] md:leading-[45.50px]">The Vital Importance of Online <span className='text-amber-400'>Quran Learning</span> in
                Modern Life!</h2>
                <p className=" text-white text-base font-normal font-['Roboto Slab'] leading-relaxed py-10">Learning the Quran Online: An Essential Necessity in Modern Life.</p>
               </div>
                </div>

                {/* second-div */}
                <div className='w-full md:w-1/2 text-center'style={{
      backgroundImage: "url('./images/bg-5.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    
  }}>
                {/* content-div */}
                  <div className='py-10 px-6'>
                  <p className=" text-white text-base font-normal font-['Roboto Slab'] leading-relaxed py-5">Experience Beyond Expectations. Reserve Your 3-Day Complimentary Trial Classes Today.</p>

                  {/* button sec */}
                  <button className=" relative bg-emerald-700 hover:bg-emerald-800 rounded-[15px] text-center text-white text-base font-normal font-['Roboto Slab'] leading-relaxed p-3">Book Free Trial Now</button>

                  </div>

                </div>

            </div>
        </main>

    </section>
  )
}

export default Vital