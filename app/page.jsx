"use client"
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import "./marquee.css"
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const router = useRouter()
  const [user, setuser] = useState(null)
  useEffect(() => {
    if (!(JSON.parse(localStorage.getItem("user")))) {
      router.push("/auth/login")
    }
    setuser(JSON.parse(localStorage.getItem("user")))
  }, [])


  return (
    <div className="bg-[url('/wallpaper.png')] min-h-screen max-h-fit absolute inset-0 bg-blend-overlay bg-black/60 bg-cover bg-center">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-wrap min-h-screen md:pt-8 px-6 lg:pt-15 justify-around font-sans ">
        <div className="lg:flex hidden flex-col space-y-10 h-full py-8 rounded-2xl w-2/9">
          <Link href={`/images`}>

            <div className="flex w-full items-center">
              <div>
                <img src="/savedimg.png" className="h-20 w-30" alt="" />
              </div>
              <div className="border px-5 py-5 cursor-pointer bg-linear-to-tr from-blue-950 to-blue-600 rounded-xl flex flex-col w-full">
                <span className="text-lg text-center font-semibold rounded-2xl">Start Detection</span>
                {/* <span className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero.</span> */}
              </div>
            </div>
          </Link>

          <Link href={`/images`}>
            <div className="flex items-center w-full">
              <div>
                <img src="/savedimg.png" className="h-20 w-30 mr-3" alt="" />
              </div>
              <div className="border px-5 py-5 cursor-pointer bg-linear-to-tr from-blue-950 to-blue-600 rounded-xl flex flex-col w-full">
                <span className="text-lg text-center font-semibold rounded-2xl">Configure </span>
                {/* <span className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero.</span> */}
              </div>
            </div>
          </Link>
          <div className="flex items-center">
            <div>
              <img src="/savedimg.png" className="h-20 w-30 mr-3" alt="" />
            </div>
            <div className="border px-5 py-5 text-center cursor-pointer bg-linear-to-tr from-blue-950 to-blue-600 rounded-xl flex flex-col w-full">
              <span className="text-lg font-semibold rounded-2xl">Enabled Apps</span>
              {/* <span className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero.</span> */}
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 p-3 space-y-4">
          <img src="/logo.jpeg" className="h-60 w-full rounded-full" alt="" />
          <span className="font-light text-md">
            In an era of open-plan offices and public workspaces, "shoulder surfing" is a growing threat to your sensitive data. VisorCam is an intelligent privacy solution designed to keep your screen for your eyes only. Using advanced eye-tracking and motion-sensing technology, VisorCam automatically blurs or masks your display the moment an unauthorized viewer is detected.

          </span>
        </div>
        <div className="flex flex-col space-y-3 h-full py-8 rounded-2xl ">
          <img src="/avatar.png" className="h-80 w-80" alt="" />
          <span className="text-xl text-center font-bold ">{user?.name}</span>
          <Link href={`/auth/profile`}>
            <button className="btn-prm">Edit Profile</button>
          </Link>
        </div>
        <div className="flex flex-col lg:hidden space-y-4 rounded-2xl ">
          <span className="text-2xl text-center font-bold my-3 lg:hidden block">

            Things You Can Do
          </span>
          <div className="flex items-center">
            <div>
              <img src="/savedimg.png" className="h-20 w-30 mr-3" alt="" />
            </div>
            <Link href={`/images`}>
              <div className="border px-5 py-5 cursor-pointer bg-linear-to-tr from-blue-950 to-blue-600 rounded-xl flex flex-col w-full">
                <span className="text-xl font-semibold rounded-2xl">Saved Images</span>
                <span className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero.</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div>
              <img src="/savedimg.png" className="h-20 w-30 mr-3" alt="" />
            </div>
            <Link href={`/images`}>
              <div className="border px-5 py-5 cursor-pointer bg-linear-to-tr from-blue-950 to-blue-600 rounded-xl flex flex-col w-full">
                <span className="text-xl font-semibold rounded-2xl">Saved Images</span>
                <span className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero.</span>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <div>
              <img src="/savedimg.png" className="h-20 w-30 mr-3" alt="" />
            </div>
            <Link href={`/images`}>
              <div className="border px-5 py-5 cursor-pointer bg-linear-to-tr from-blue-950 to-blue-600 rounded-xl flex flex-col w-full">
                <span className="text-xl font-semibold rounded-2xl">Saved Images</span>
                <span className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero.</span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
