import React from 'react'

const Claim = () => {
  return (
    <section className='w-full' style={{
      backgroundImage: "url('./images/bg-6.png')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',
    
  }}>
        <main id='fee-Structure' className='mx-auto max-w-7xl'>
            {/* main-div */}
            <div className='py-12 pl-3 md:pl-0'>
              {/* first-div */}
              <div className='flex flex-col '>
                <h2 className="text-3xl font-bold font-['Roboto Slab'] leading-[45px] text-white "><span className="text-emerald-700 ">USD $30.00 Only/Month</span> – Affordability without Compromise</h2>
                {/* para-1 */}
                <p className="text-white text-base font-normal font-['Roboto Slab'] leading-relaxed py-4">We believe that access to divine knowledge should never be out of reach. That’s why we offer this exclusive learning opportunity at an <span className='text-emerald-700 font-bold '>unbelievably affordable rate</span> of USD $30.00 per month. We take pride in providing high-quality education at a price that makes it accessible to learners from all walks of life. At Pak Quran Academy, you’ll
                receive exceptional value without compromising on the quality of instruction or the depth of your learning.</p>

                {/* para-2 */}
                <p className="text-white text-base font-normal font-['Roboto Slab'] leading-relaxed">There has never been a better time to enrich your life with the teachings of the Quran. Let Pak Quran Academy be your guiding light on this spiritual voyage. Join us today
                and experience the power of one-to-one learning with 30-minute classes, four times a month, at an unbeatable price of $30 only per month.</p>

              </div>
              {/* second-div */}
              <div>
                <h2 className="text-3xl font-bold font-['Roboto Slab'] leading-[45px] text-white pt-8">Claim Your <span className='text-emerald-700'>FREE Online Quran Class</span> Trial Today</h2>

                {/* para-1 */}
                <p className="text-white text-base font-normal font-['Roboto Slab'] leading-relaxed pt-4">We are also offering a free online Quran class at Pak Quran Academy. Delve into a personalized one-to-one, 30-minute class, tailored to your level and goals, all at
                absolutely no cost! </p>

                {/* para-2 */}
                <p className="text-white text-base font-normal font-['Roboto Slab'] leading-relaxed py-6">No commitments, no fees – just a chance to unlock the treasures of the Quran and immerse yourself in its timeless wisdom. Embrace this divine offer now, and let the
                journey of spiritual enlightenment begin, completely risk-free. Don’t miss out on <span className='text-emerald-700 font-bold'>this limited-time invitation</span>  to explore the wonders of the Quran with our complimentary trial – sign up today!</p>
                </div>
                 {/* button sec */}
                 <button className=" relative bg-emerald-700 hover:bg-emerald-800 rounded-[15px] text-center text-white text-base font-normal font-['Roboto Slab'] leading-relaxed p-3">Quick Admission</button>
                
            </div>
        </main>
    </section>
  )
}

export default Claim