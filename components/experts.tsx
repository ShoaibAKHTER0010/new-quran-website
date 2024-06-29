import React from 'react'

const Experts = () => {
  return (
    <section id='teachers' className='w-full'
    style={{
        backgroundImage: "url('./images/bg-main-2.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        
    }}>
        <main className='mx-auto max-w-7xl p-8'>
            {/* main-div */}
            <div className='w-full'>
                {/* first-div */}
                <div className='w-full md:w-1/2  rounded-2xl px-12 py-6'  style={{
        backgroundImage: "url('./images/bg-2.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        
    }}>
                {/* child-one */}
                <div className='py-12 md:py-0'>
                <h2 className="text-neutral-800 text-[18px] font-bold font-['Roboto Slab'] leading-[25.50px]">Meet Our Inspiring Online <br />
                 Quran Teacher Experts</h2>

                 <p className="text-gray-700 text-base font-md font-['Roboto Slab'] leading-normal">Discover a profound connection with the Quran through our dedicated
Online Quran Teacher experts. At our online Quran academy, we bring
you a transformative learning experience, led by passionate instructors
who are committed to nurturing your spiritual growth. Our Online
Quran Teachers are skilled, compassionate, and deeply knowledgeable
in Quranic studies, offering personalized guidance tailored to your
unique needs.</p>
                </div>

                {/* child-two */}
               <div className='py-6 hidden md:flex md:flex-col'>
               <h2 className="text-neutral-800 text-[18px] font-bold font-['Roboto Slab'] leading-[25.50px]">Four Classes per Month Steady <br />
               Progress, Lasting Impact</h2>

                 <p className="text-gray-700 text-base font-normal font-['Roboto Slab'] leading-md">Consistency is the key to success, and we are committed to your
progress. With four classes scheduled per month, you’ll experience a
steady advancement in your Quranic journey. These regular sessions
allow you to absorb the teachings effectively, practice consistently, and
receive timely feedback from your online quran teacher.</p>
               </div>
                {/* button sec */}
                <button className=" relative bg-emerald-700 hover:bg-emerald-800 rounded-[15px] text-center text-white text-base font-normal font-['Roboto Slab'] leading-relaxed p-3">Join Us Today</button>
                </div>

                {/* second-div */}
                {/* empity-div */}
                <div className=' hidden md:w-1/2'>

                </div>

            </div>
        </main>
    </section>
  )
}

export default Experts