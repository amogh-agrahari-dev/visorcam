import Image from "next/image"
import Link from "next/link"

const Page = () => {
  return (
    <div className="flex min-h-screen justify-between min-w-screen bg-[url('/wallpaper.png')] bg-cover bg-center">
      <div className=" px-4 py-5 ">
        
      </div>
      <div className="w-1/2 sm:w-full items-center flex flex-col ">
        <div className="bg-[#0F223A]/80 backdrop-blur-md border border-cyan-400/30 
rounded-xl shadow-lg p-8 text-white my-auto space-y-4">
          <div className="mx-auto space-x-3 w-1/2 flex px-5 rounded-full">
        <img src="/logo.jpeg" className="h-30 w-full my-auto rounded-full" alt="" />
        </div>
          <h1 className="text-center text-3xl my-10 font-bold">Welcome Back! Lets Secure</h1>
          <input className="input_prm" type="text" placeholder="Enter email" />

          <input className="input_prm" type="password" placeholder="Enter password" />
          <h1 className="mr-4 cursor-pointer text-md text-end font-semibold">Forgot Password?</h1>
          <button className="btn-prm">Login</button>
          <Link href={`/auth/register`}>

            <button className="btn-sec">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page