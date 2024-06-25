import React from 'react'

const Footer = () => {
  return (
    <section className='w-full'>
        <main className='mx-auto w-full'>
            {/* main-div */}
            <div>
                {/* first-div */}
                <div className='w-full bg-[#192C27]'>
                    {/* child-div */}
                    <div className='w-full md:w-1/2 text-center pt-5 text-white '>
                   <p className=" Copyright © 2024 - with Pak Quran Academy."> Copyright © 2024 - with Pak Quran Academy.</p>
                    </div>
                   </div>

                   {/* second-div */}
                   <div className='w-full flex'>
                    {/* child-div-1 */}
                      <div className='bg-[#0D9FC1] w-[40vw] text-center'>
                       <h3 className="text-white text-[12.80px] font-bold font-['Roboto Slab'] leading-[30px]">Free Trial</h3>
                      </div>

                    {/* child-div-2 */}
                    <div className='w-[60vw] flex '>
                        {/* sub-child-1 */}
                        <div className='w-[20vw] bg-[#60C147] flex justify-center items-center'>
                         <img src="./images/foot-imgs/mini-watsapp.png" alt="img" />
                        </div>

                          {/* sub-child-2 */}
                          <div className='w-[20vw] bg-[#313232] flex justify-center items-center'>
                         <img src="./images/foot-imgs/phone.png" alt="img" />
                        </div>

                          {/* sub-child-3 */}
                          <div className='w-[20vw] bg-[#D7B836] flex justify-center items-center'>
                         <img src="./images/foot-imgs/mail.png" alt="img" />
                        </div>

                    </div>

                   </div>
            </div>
        </main>
    </section>
  )
}

export default Footer