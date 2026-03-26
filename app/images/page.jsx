import React from 'react'
import Navbar from "../../components/Navbar.jsx"
import Card from '../../components/Card.jsx'
import PrivacyGuard from '../../components/PrivacyGuard.tsx'
const Page = () => {
  return (
    <div className="min-h-screen max-h-fit absolute inset-0 bg-blend-overlay bg-black/60 bg-[url('/wallpaper.png')] bg-cover bg-center">
      <Navbar />
      <div className="grid justify-center">
        <PrivacyGuard />
        <div className='max-w-5xl justify-between mt-15 lg:space-x-7 space-x-2 space-y-6 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Page