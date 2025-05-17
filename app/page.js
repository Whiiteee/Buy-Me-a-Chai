import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
      <div className='flex justify-center text-white h-[44vh] items-center flex-col gap-4 px-10'>
        <div className='flex justify-center items-center font-bold text-5xl'>Buy Me a Chai! <span><Image className='pb-5' src={'/tea.gif'} alt='tea' height={100} width={100} unoptimized draggable={false} /></span> </div>
        <p className='text-3xl py-5'>I am a software engineer and I love Chai. If you like my work, please consider buying me a Chai</p>
        <div>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Start Now</button>
          <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Read More</button>
        </div>
      </div>
      {/* <div className="bg-white h-1 opacity-30 mx-20"></div> */}
      <div className='px-10 text-2xl text-white h-1'>
        <h1 className='text-center'>
          Get Me a Chai is a platform that allows you to fund your projects and get paid for your work. It is a place where you can showcase your skills and get paid for your work. You can also find projects that you can work on and get paid for your work. It is a great way to earn money and showcase your skills.
        </h1>
        <div className='flex justify-center items-center m-10'>
          <div className='flex flex-col gap-4 text-center'>
            <Image className='bg-white rounded-full p-4 ' src={'/man.gif'} height={175} width={175} alt={'man'} unoptimized draggable={false} />
          <p className='text-xl'>Fund Your Self</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
