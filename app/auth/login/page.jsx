"use client";
import Link from "next/link"
import CaptchaForm from "../../../components/Captcha"
import { useState } from "react"

const Page = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const onSubmit = async() => {
    const response = await fetch("http://127.0.0.1:8000/api/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: email,
      password: password,
    }),
  });

  const data = await response.json();
  console.log(data);
  }
  return (
    <div className="flex min-h-screen justify-between min-w-screen bg-[url('/wallpaper.png')] bg-cover bg-center">
      <div className="sm:p-0 px-4 py-5 ">

      </div>
      <div className="w-1/2 md:w-full items-center flex flex-col ">
        <div className="bg-[#0F223A]/80 backdrop-blur-md border border-cyan-400/30 
rounded-xl shadow-lg p-8 text-white my-auto space-y-4">
          <div className="mx-auto space-x-3 w-1/2 flex px-5 rounded-full">
            <img src="/logo.jpeg" className="h-30 w-full my-auto rounded-full" alt="" />
          </div>
          <h1 className="text-center text-3xl my-10 font-bold">Welcome Back! Lets Secure</h1>
          <input value={name} onChange={e => setname(e.target.value)} className="input_prm" type="text" placeholder="Enter username" />

          <input value={password} onChange={e => setpassword(e.target.value)} className="input_prm" type="password" placeholder="Enter password" />
          <h1 className="mr-4 cursor-pointer text-md text-end font-semibold">Forgot Password?</h1>
          <CaptchaForm />
          <button onClick={onSubmit} className="btn-prm">Login</button>
          <Link href={`/auth/register`}>

            <button className="btn-sec">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Page