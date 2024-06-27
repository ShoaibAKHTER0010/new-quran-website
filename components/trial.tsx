import React from 'react'

const Trial = () => {
  return (
    <section className='w-full' style={{
      backgroundImage: "url('./images/bg-2.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    
  }}>
        <main className='mx-auto max-w-7xl py-24'>
            {/* main-div  */}
            <div className='w-[100%] flex flex-col md:flex-row gap-28'>
                {/* first div */}
                <div className='w-full md:w-[40%] pl-6  md:pl-0'>
                <img src="./images/quran.png" alt="quran" />
                </div>

                {/* second-div */}
                <div className='w-full md:w-[60%] px-6 md:px-0  '>
                <h3 className="text-neutral-800 text[32px] md:text-[35px] font-bold font-['Roboto Slab']   leading-[35.50px] md:leading-[45.50px]">EXPERIENCE COMPLIMENTARY <span className="text-amber-400 ">ONLINE 
                QURAN CLASSES</span> AT NO COST</h3>

                {/* para-1 */}
                <p className="text-gray-700 text-base font-normal font-['Roboto Slab'] leading-relaxed ">Avail our Complimentary Trial Classes by Completing the Form to Learn Quran Online.
                Experience the Three-Day Free Trial Offer from Pak Quran Academy. Enroll Now!</p>
                  
                  {/* para-2 */}
                  <p className="text-neutral-800 text-[25px] font-bold font-['Roboto Slab'] leading-[37.50px] py-6">3 Days Free Trial</p>

                  {/* button portion */}
                  <button className=" relative bg-emerald-700 hover:bg-emerald-800 rounded-[15px] text-center text-white text-base font-normal font-['Roboto Slab'] leading-relaxed p-3">Book Free Trial Now</button>

                </div>

            </div>
        </main>
    </section>
  )
}

export default Trial