import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around items-center lg:px-5 md:px-3 lg:py-8 md:py-4'>
        <div className='text-3xl font-bold'>
            VisorCam
        </div>
        <div className=''>
            <input type="text" className='bg-gray-950 px-8 py-2.5 rounded-xl outline-0 focus:outline-2' placeholder='Search Here' />
        </div>
        <div className='flex space-x-6 text-white font-semibold text-lg'>
            <span>Register</span>
            <span>Logout</span>

        </div>
    </div>
  )
}

export default Navbar