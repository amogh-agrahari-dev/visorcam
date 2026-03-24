"use client"
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import "./marquee.css"
import Link from "next/link";
export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"))
  const router = useRouter()

  if (!user) {
    router.push("/auth/login")
  }

  return (
    <div className="bg-[url('/wallpaper.png')] min-h-screen max-h-fit absolute inset-0 bg-blend-overlay bg-black/60 bg-cover bg-center">
      <div>
        <Navbar />
      </div>
      <div className="flex flex-wrap min-h-screen md:pt-8 px-6 lg:pt-15 justify-around font-sans ">
        <div className="lg:flex hidden flex-col space-y-10 h-full py-8 rounded-2xl w-2/9">
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
            <div className="border px-5 py-5 cursor-pointer bg-linear-to-tr from-blue-950 to-blue-600 rounded-xl flex flex-col w-full">
              <span className="text-xl font-semibold rounded-2xl">Configure Settings</span>
              <span className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero.</span>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src="/savedimg.png" className="h-20 w-30 mr-3" alt="" />
            </div>
            <div className="border px-5 py-5 cursor-pointer bg-linear-to-tr from-blue-950 to-blue-600 rounded-xl flex flex-col w-full">
              <span className="text-xl font-semibold rounded-2xl">Enabled Apps</span>
              <span className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero.</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 p-3 space-y-4">
          <img src="/logo.jpeg" className="h-60 w-full rounded-full" alt="" />
          <span className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsam quaerat quia distinctio magni totam voluptates reiciendis delectus velit dolore, perspiciatis impedit accusantium provident. Ratione quia reiciendis eius dignissimos omnis.</span>
        </div>
        <div className="flex flex-col space-y-3 h-full py-8 rounded-2xl ">
          <img src="/avatar.png" className="h-80 w-80" alt="" />
          <span className="text-xl text-center font-bold ">Amogh Agrahari</span>
          <Link href={`/auth/profile`}>
            <button className="btn-prm">Edit Profile</button>
          </Link>
        </div>
        <span className="text-2xl font-bold my-3">

          Things You Can Do
        </span>
        <div className="flex flex-col lg:hidden space-y-4 rounded-2xl ">
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
