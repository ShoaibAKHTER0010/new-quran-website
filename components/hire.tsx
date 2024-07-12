import React from 'react'

const Hire = () => {
  return (
    <section className='w-full py-16'>
        <main className='mx-auto max-w-7xl'>
            {/* heading section */}
            <div className='text-center'>
                <h2 className="text-neutral-800 text-[35px] font-bold font-['Roboto Slab'] leading-[45.50px]">Reasons to <span className='text-amber-400'>Hire Us?</span></h2>
            </div>
            {/* main-div */}
            <div className='w-full flex flex-col md:flex-col lg:flex-row gap-8 pt-12'>
                {/* first-div */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                <img src="./images/hire.png" alt="img" />

                </div>

                {/* second-div */}
                <div className='w-full lg:w-1/2 px-3 '>
                <p className=" text-gray-700 text-base font-normal font-['Roboto Slab'] leading-relaxed py-3 text-wrape">At Pak Quran Academy, we take pride in our team of highly qualified and
experienced teachers. They are dedicated to providing you with personalized
guidance and support on your Quranic journey. We understand that everyone
has different commitments. That’s why we offer flexible learning options for
the students. Whether you’re a working professional, a student, or a busy
parent, you can choose the time that suits you best. Our online Quran classes
are available seven days a week, allowing you to learn at your convenience.</p>

                <p className=" text-gray-700 text-base font-normal font-['Roboto Slab'] leading-relaxed">At Pak Quran Academy, we take pride with our team of highly qualified and
experienced teachers. They are dedicated to providing you with personalized
guidance and support on your Quranic journey. We understand that everyone
has different commitments. That’s why we offer flexible learning options for
the students. Whether you’re a working professional, a student, or a busy
parent, you can choose the time that suits you best. Our online Quran classes
are available seven days in a week, allowing you to learn at your convenience.</p>

                </div>

            </div>
        </main>
    </section>
  )
}

export default Hire