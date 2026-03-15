import Link from "next/link"

const Page = () => {
  return (
     <div className="flex min-h-screen justify-between min-w-screen">
      <div className="w-1/2 px-4 py-5 items-center flex flex-col">
        <img src="/logo.jpeg" className="w-3/4 h-3/4 my-auto rounded-full" alt="" />
      </div>
      <div className="w-1/2 items-center flex flex-col">
        <div className="border my-auto space-y-4 flex flex-col w-3/5 rounded-2xl border-solid shadow-2xl px-5 py-4">
          <h1 className="text-center text-4xl font-bold">SIGN UP</h1>
          <span>Enter Name</span>
          <input className="input_prm" type="text" placeholder="Enter Name" />
          <span>Enter email</span>
          <input className="input_prm" type="text" placeholder="Enter email" />
          <span>Enter password</span>
          <input className="input_prm" type="password" placeholder="Enter password" />
                    <span>Confirm password</span>

          <input className="input_prm" type="password" placeholder="Confirm password" />
          {/* <h1 className="mr-4 cursor-pointer text-end font-semibold">Forgot Password?</h1> */}

          <button className="btn-prm">Sign Up</button>
          <Link href={`/auth/login`}>
          
                    <button className="btn-sec">Login</button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Page