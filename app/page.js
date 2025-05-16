import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className='flex justify-center text-white h-[44vh] items-center flex-col gap-4'>
      <div className='flex justify-center items-center font-bold text-5xl'>Buy Me a Chai! <span><Image className='pb-5' src={'/tea.gif'} alt='tea' height={100} width={100}/></span> </div>
        <p className='text-2xl py-5'>I am a software engineer and I love Chai. If you like my work, please consider buying me a Chai</p>
      <div>
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Start Now</button>
        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Read More</button>
      </div>
    </div>
    <div className="bg-white h-1 opacity-30 mx-20">
      sdf
    </div>
    </>
  )
}

export default page
