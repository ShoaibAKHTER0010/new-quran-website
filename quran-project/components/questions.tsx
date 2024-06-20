import React from 'react'

const Questions = () => {
  return (
    <section className='w-full py-16'>
        <main className='mx-auto max-w-7xl'>
            {/* main div */}
            <div className='flex'>
                {/* first-div */}
                <div className='w-1/2'>
                 {/* child-1 */}
                 <div>
                    <img src="./images/msg.png" alt="logo" />
                    <h2 className="text-neutral-800 text-[35px] font-bold font-['Roboto Slab'] leading-[45.50px] py-4">Frequently Asked Questions</h2>
                 </div>
                </div>

                {/* second-div */}
                <div className='w-1/2'>
                 <img src="./images/Image.png" alt="img" />
                </div>

            </div>
        </main>
    </section>
  )
}

export default Questions