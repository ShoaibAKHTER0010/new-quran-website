import VismeForm from '@/components/vismeform';
import React from 'react'

const Choose = () => {
  return (
    <section id='about' className='w-full py-24'>
        <main className='mx-auto max-w-7xl'>
            {/* main div */}
            <div className=''>
                {/* heading-section */}
                <div className='text-center'>
                 <h2 className="text-neutral-800 text-[35px] font-bold font-['Roboto Slab'] leading-[45.50px]">Why Choose <span className="text-amber-400">Pak Quran Academy</span>?</h2>
                 <p className="text-neutral-800 text-[25px] font-bold font-['Roboto Slab'] leading-[37.50px]">Our Competitive Features</p>
                </div>

                {/* cards-section */}
                <div className='py-16 flex flex-col gap-6 px-6 md:px-0  '>
                    {/* first-div */}
                    <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-4'>
                     {/* card-1 */}
                     <div className='w-full lg:w-[400px] xl:w-[400px] py-20 px-20 lg:px-10    rounded-3xl  ' style={{
      backgroundImage: "url('./images/bg-3.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    
    
  }}>
                   {/* child-1 */}
                   <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                   <div> <img src="./images/choose-logo/choose-1.png" alt="logo-1" /></div>
                    <h2 className="text-neutral-800 text-xl font-bold font-['Roboto Slab'] leading-[30px] pt-5">Flexible Schedule 24/7</h2>
                   </div>
                   <p className="text-gray-700 text-base font-normal font-['Roboto Slab'] py-8 ">Our dedicated team of experts ensures 24/7
availability of our online Quran teachers.
This presents an exceptional chance for
you and your children to engage in online
Quran classes conveniently, regardless of
your location and at any hour of the day.</p>
                     </div>

                     {/* card-2 */}
                     <div className='w-full lg:w-[400px] xl:w-[400px] py-20 px-20 lg:px-10 rounded-3xl' style={{
      backgroundImage: "url('./images/bg-3.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    
  }}>
                   {/* child-1 */}
                   <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                    <div><img src="./images/choose-logo/choose-2.png" alt="logo-2" /></div>
                    <h2 className="text-neutral-800 text-xl font-bold font-['Roboto Slab'] leading-[30px] pt-5">Flexible Schedule 24/7</h2>
                   </div>
                   <p className="text-gray-700 text-base font-normal font-['Roboto Slab'] py-8 ">Our dedicated team of experts ensures 24/7
availability of our online Quran teachers.
This presents an exceptional chance for
you and your children to engage in online
Quran classes conveniently, regardless of
your location and at any hour of the day.</p>
                     </div>

                     {/* card-3 */}
                     <div className='w-full lg:w-[400px] xl:w-[400px] py-20 px-20 lg:px-10 rounded-3xl' style={{
      backgroundImage: "url('./images/bg-3.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    
  }}>
                   {/* child-1 */}
                   <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                   <div> <img src="./images/choose-logo/choose-3.png" alt="logo-3" /></div>
                    <h2 className="text-neutral-800 text-xl font-bold font-['Roboto Slab'] leading-[30px] pt-5">Flexible Schedule 24/7</h2>
                   </div>
                   <p className="text-gray-700 text-base font-normal font-['Roboto Slab'] py-8 ">Our dedicated team of experts ensures 24/7
availability of our online Quran teachers.
This presents an exceptional chance for
you and your children to engage in online
Quran classes conveniently, regardless of
your location and at any hour of the day.</p>
                     </div>

                    </div>

                    {/* second-div */}
                    <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-4'>
                     {/* card-4 */}
                     <div className='w-full lg:w-[400px] xl:w-[400px] py-20 px-20 lg:px-10 rounded-3xl' style={{
      backgroundImage: "url('./images/bg-3.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    
  }}>
                   {/* child-1 */}
                   <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                    <div><img src="./images/choose-logo/choose-4.png" alt="logo-4" /></div>
                    <h2 className="text-neutral-800 text-xl font-bold font-['Roboto Slab'] leading-[30px] pt-5">Flexible Schedule 24/7</h2>
                   </div>
                   <p className="text-gray-700 text-base font-normal font-['Roboto Slab'] py-8 ">Our dedicated team of experts ensures 24/7
availability of our online Quran teachers.
This presents an exceptional chance for
you and your children to engage in online
Quran classes conveniently, regardless of
your location and at any hour of the day.</p>
                     </div>

                     {/* card-5 */}
                     <div className='w-full lg:w-[400px] xl:w-[400px] py-20 px-20 lg:px-10 rounded-3xl' style={{
      backgroundImage: "url('./images/bg-3.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    
  }}>
                   {/* child-1 */}
                   <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                  <div>  <img src="./images/choose-logo/choose-5.png" alt="logo-5" /></div>
                    <h2 className="text-neutral-800 text-xl font-bold font-['Roboto Slab'] leading-[30px] pt-5">Flexible Schedule 24/7</h2>
                   </div>
                   <p className="text-gray-700 text-base font-normal font-['Roboto Slab'] py-8 ">Our dedicated team of experts ensures 24/7
availability of our online Quran teachers.
This presents an exceptional chance for
you and your children to engage in online
Quran classes conveniently, regardless of
your location and at any hour of the day.</p>
                     </div>

                     {/* card-6 */}
                     <div className='w-full lg:w-[400px] xl:w-[400px] py-20 px-20 lg:px-10 rounded-3xl' style={{
      backgroundImage: "url('./images/bg-3.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    
  }}>
                   {/* child-1 */}
                   <div className='flex flex-col md:flex-row gap-2 md:gap-4'>
                   <div> <img src="./images/choose-logo/choose-6.png" alt="logo-6" /></div>
                    <h2 className="text-neutral-800 text-xl font-bold font-['Roboto Slab'] leading-[30px] pt-5">Flexible Schedule 24/7</h2>
                   </div>
                   <p className="text-gray-700 text-base font-normal font-['Roboto Slab'] py-8 ">Our dedicated team of experts ensures 24/7
availability of our online Quran teachers.
This presents an exceptional chance for
you and your children to engage in online
Quran classes conveniently, regardless of
your location and at any hour of the day.</p>
                     </div>

                    </div>

                </div>

            </div>
        </main>

    </section>
  )
}

export default Choose