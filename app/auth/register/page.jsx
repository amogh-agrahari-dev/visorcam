"use client";

import Link from "next/link"
import { useState } from "react";

const Page = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signup = async() => {
    const response = await fetch("http://127.0.0.1:8000/api/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: name,
      email: email,
      password: password,
    }),
  });

  const data = await response.json();
  alert(data.message);
  }
  return (
     <div className="flex min-h-screen min-w-screen bg-[url('/wallpaper.png')] bg-cover bg-center">
      <div className="md:px-5 lg:px-4 lg:py-5 ">

      </div>
      <div className="lg:w-2/5 mx-auto p-5 md:w-full items-center flex flex-col ">
        <div className="bg-[#0F223A]/80 backdrop-blur-md border border-cyan-400/30 
rounded-xl shadow-lg p-8 text-white my-auto space-y-4">
          <div className="mx-auto space-x-3 w-1/2 flex px-5 rounded-full">
            <img src="/logo.jpeg" className="h-30 w-full my-auto rounded-full" alt="" />
          </div>
           <h1 className="text-center text-4xl font-bold">SIGN UP</h1>
          <span>Enter Name</span>
          <input value={name} onChange={e => setname(e.target.value)} className="input_prm" type="text" placeholder="Enter Name" />
          <span>Enter email</span>
          <input value={email} onChange={e => setemail(e.target.value)} className="input_prm" type="text" placeholder="Enter email" />
          <span>Enter password</span>
          <input value={password} onChange={e => setpassword(e.target.value)} className="input_prm" type="password" placeholder="Enter password" />
                    <span>Confirm password</span>

          <input className="input_prm" type="password" placeholder="Confirm password" />
          {/* <h1 className="mr-4 cursor-pointer text-end font-semibold">Forgot Password?</h1> */}

          <button onClick={signup} className="btn-prm">Sign Up</button>
          <Link href={`/auth/login`}>
          
                    <button className="btn-sec">Login</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Page