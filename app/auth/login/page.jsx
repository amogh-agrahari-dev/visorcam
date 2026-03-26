"use client";
import Link from "next/link"
import CaptchaForm from "../../../components/Captcha"
import { useState } from "react"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const Page = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter()
  const onSubmit = async () => {
    if (!name || !password) {
      toast('Enter Both the Fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        type: "error"
      });
    } else {

      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data);
      if (data) {
        localStorage.setItem("user", JSON.stringify(data))
        router.push("/")
      }
    }
  }
  return (
    <div className="flex min-h-screen px-4 min-w-screen bg-[url('/wallpaper.png')] bg-cover bg-center">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className=" md:w-full items-center flex flex-col ">
        <div className="bg-[#0F223A]/80 backdrop-blur-md max-w-4xl mx-auto border border-cyan-400/30 
rounded-xl shadow-lg p-8 text-white my-auto space-y-4">
          <div className="mx-auto space-x-3 w-1/2 flex px-5 rounded-full">
            <img src="/logo.jpeg" className="h-30 w-full my-auto rounded-full" alt="" />
          </div>
          <h1 className="text-center text-3xl my-10 font-bold">Welcome Back! Lets Secure</h1>
          <input value={name} onChange={e => setname(e.target.value)} className="input_prm" type="text" placeholder="Enter username" />

          <input value={password} onChange={e => setpassword(e.target.value)} className="input_prm" type="password" placeholder="Enter password" />
          <h1 className="mr-4 cursor-pointer text-md text-end font-semibold">Forgot Password?</h1>
          {/* <CaptchaForm /> */}
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