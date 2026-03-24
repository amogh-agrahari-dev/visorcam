import React from 'react'

const Card = () => {
  return (
    <div className='w-76 bg-[#0F223A]/60 p-5 flex flex-col rounded-xl text-center backdrop-blur-xs'>
        <div className='flex items-center text-sm font-extralight justify-between mb-2'>
            <span>Date: 23/10/2007</span>
            <span>Time: 19:10PM</span>
        </div>
        <img src="/logo.jpeg" className="h-36 w-full my-auto rounded-xl mb-3" alt="" />
        <span className='text-2xl font-bold'>App Name</span>
        <button className='btn-prm mt-2 hover:animate-pulse py-2'>Done</button> 

    </div>
  )
}

export default Card