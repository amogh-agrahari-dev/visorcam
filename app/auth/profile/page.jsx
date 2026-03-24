import React from 'react'
import Navbar from '../../../components/Navbar'

const Page = () => {
    return (

        <div className="min-h-screen max-h-fit absolute inset-0 bg-blend-overlay bg-black/60 bg-[url('/wallpaper.png')] bg-cover bg-center">
            <Navbar />
            <div className='px-5'>

                <div className="bg-[#0F223A]/60 mt-7 backdrop-blur-md max-w-4xl mx-auto border border-cyan-400/30 
rounded-xl shadow-lg p-8 text-white my-auto space-y-4">
                    <h1 className="text-2xl font-bold text-center">Profile Page</h1>
                </div>
            </div>

        </div>

    )
}

export default Page