"use client";
import { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar'
import { useRouter } from 'next/navigation';
import moment from 'moment';
import ImgUpload from '../../../components/ImgUpload.js';
import PrivacyGuard from '../../../components/PrivacyGuard.jsx';

const Page = () => {
    const [user, setuser] = useState()
    const router = useRouter()

    useEffect(() => {
        setuser(JSON.parse(localStorage.getItem("user")))

    }, [])
    // console.log(user);
    const ll = moment(user?.last_login).utc().format("Do MMMM YYYY");
    const dj = moment(user?.
        date_joined
    ).utc().format("Do MMMM YYYY");
    return (

        <div className="min-h-screen max-h-fit absolute inset-0 bg-blend-overlay bg-black/60 bg-[url('/wallpaper.png')] bg-cover bg-center">
            <Navbar />
            <PrivacyGuard user={user?.username} />
            <div className='px-5'>

                <div className="bg-[#0F223A]/60 mt-7 backdrop-blur-md max-w-4xl mx-auto border border-cyan-400/30 
rounded-xl shadow-lg p-8 text-white my-auto space-y-4">
                    <h1 className="text-2xl font-bold text-center">Profile Page</h1>
                    <div className='flex flex-col space-y-4 font-semibold text-lg'>
                        <span>Name: {user?.name} </span>
                        <span>Email: {user?.email}</span>
                        <span>Username: {user?.username}</span>
                        <span>Last Login: {ll}</span>
                        <span>Date Joined: {dj}</span>
                    </div>
                    <ImgUpload user={user} />
                </div>
            </div>

        </div>

    )
}

export default Page