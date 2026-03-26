"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {
    const router = useRouter()
    const logout = async () => {
        localStorage.clear()
        router.push('/auth/login')
    }

    return (
        <div className='flex justify-around items-center lg:px-5 md:px-3 py-6 bg-[#0F223A]/20 sticky backdrop-blur-xs'>
            <Link href={`/`}>
                <div className='text-3xl cursor-pointer font-bold'>
                    ViSORCAM
                </div>
            </Link>
            <div className='hidden lg:block'>
                <input type="text" className='bg-gray-950 px-8 py-2.5 rounded-xl outline-0 focus:outline-2' placeholder='Search Here' />
            </div>
            <div className='flex cursor-pointer space-x-3 lg:space-x-6 lg:text-lg md:text-md sm:text-md text-white font-semibold '>
                {/* <span className='btn-prm' >Start Securing</span> */}
                <span><Link href={`/auth/register`}>

                    Register
                </Link>
                </span>
                <span onClick={logout}>Logout</span>

            </div>
        </div>
    )
}

export default Navbar