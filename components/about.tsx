import React from 'react'

const About = () => {
  return (
    <section id='contact' className= 'w-full' style={{
        backgroundImage: "url('./images/cor-bg.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        
    }}>
        <main className='mx-auto max-w-7xl'>
            {/* main-div */}
            <div className='flex justify-center gap-10  md:gap-24 py-10 flex-col md:flex-row pl-6 md:pl-0'>
              {/* first-div */}
              <div>
                <h2 className="text-white text-2xl font-bold font-['Roboto Slab'] leading-[40px] py-6">About</h2>

                <p className="text-white text-base font-normal font-['Roboto Slab'] leading-relaxed">At Pak Quran Academy, we provide <br />
convenient and flexible online <br />
Quran classes for learners of all ages <br />
and backgrounds. Whether you are a <br />
beginner taking your first steps in <br />
Quranic studies or an advanced <br />
learner seeking to enhance your <br />
recitation skills, our tailored <br />
programs cater to individual needs.</p>

               {/* child-div */}
               <div className='flex gap-4 py-6'>
                <img src="./images/facebook.png" alt="fb-logo" />
                <img src="./images/twitter.png" alt="twtr-logo" />
               </div>
              </div>

              {/* second-div */}
              <div className='flex flex-col gap-3'>
              <h2 className="text-white text-2xl font-bold font-['Roboto Slab'] leading-[40px] py-6">Quick Links</h2>

              {/* para-1 */}
                <p className="text-slate-200 text-base font-bold font-['Roboto Slab'] leading-relaxed hover:text-emerald-400">Learn Noorani Qaida Online</p>
                {/* para-2 */}
                <p className="text-slate-200 text-base font-bold font-['Roboto Slab'] leading-relaxed hover:text-emerald-400">Learn Quran Reciting</p>
                {/* para-3 */}
                <p className="text-slate-200 text-base font-bold font-['Roboto Slab'] leading-relaxed hover:text-emerald-400">Learn Quran Memorization</p>
                {/* para-4 */}
                <p className="text-slate-200 text-base font-bold font-['Roboto Slab'] leading-relaxed hover:text-emerald-400">Learn Quran with Tajweed</p>
                {/* para-5 */}
                <p className="text-slate-200 text-base font-bold font-['Roboto Slab'] leading-relaxed hover:text-emerald-400">Learn Quran with Tafseer</p>
              
              </div>

              {/* third-div */}
              <div className='flex flex-col gap-3'>
              <h2 className="text-white text-2xl font-bold font-['Roboto Slab'] leading-[40px] py-6">Useful Links</h2>
              {/* para-1 */}
              <p className="text-slate-200 text-base font-bold font-['Roboto Slab'] leading-relaxed hover:text-emerald-400">Blog</p>

              {/* para-2 */}
              <p className="text-slate-200 text-base font-bold font-['Roboto Slab'] leading-relaxed hover:text-emerald-400">Privacy Policy</p>

              {/* para-3 */}
              <p className="text-slate-200 text-base font-bold font-['Roboto Slab'] leading-relaxed hover:text-emerald-400">Sitemap</p>
              </div>


              {/* fourth-div */}
              <div className='flex flex-col gap-3'>
              <h2 className="text-white text-2xl font-bold font-['Roboto Slab'] leading-[40px] py-6">Get in touch</h2>

              {/* para-1 */}
              <p className="text-slate-200 text-base font-bold font-['Roboto Slab'] leading-relaxed"><span className='bolck lg:inline-flex'><img src="./images/arrow.png" alt="arrow" className='w-[30px] h-[30px] hover:rotate-45' /></span> Mobile: <span className='hover:text-emerald-400'>+923124810000</span></p>

               {/* para-2 */}
              <p className="text-slate-200 text-base font-bold font-['Roboto Slab'] leading-relaxed"><span className='block  lg:inline-flex '><img src="./images/arrow.png" alt="arrow" className='w-[30px] h-[30px] hover:rotate-45' /></span> Whatsapp:<span className='hover:text-emerald-400'>92312481000</span></p>

              {/* para-3 */}
              <p className="text-slate-200 text-base font-bold font-['Roboto Slab'] leading-relaxed hover:text-emerald-400 flex-wrap "><span className='lg:inline-flex block hover:rotate-45'><img src="./images/arrow.png" alt="arrow" className='w-[28px] h-[30px] ' /></span> pakquranteaching <span className='inline-flex md:block lg:inline-flex text-amber-400'>@gmail.com</span></p>
              </div>
                 
            </div>
        </main>
    </section>
  )
}

export default About