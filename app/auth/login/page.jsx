"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  UserRound,
  Sparkles,
  Zap,
  CheckCircle2,
  Lock
} from "lucide-react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    if (!name || !password) {
      toast.error("Enter both fields to continue.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name,
          password,
        }),
      });

      const data = await response.json();
      toast(data.message || "Login successful", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
        transition: Bounce,
        type: data.message ? "success" : "info",
      });

      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      toast.error("Unable to connect to login server.", {
        position: "top-right",
        autoClose: 4000,
        theme: "dark",
        transition: Bounce,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-10 font-sans text-slate-100 selection:bg-cyan-500 selection:text-black sm:px-6 lg:px-8">
      {/* Background Glows */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-full max-w-6xl bg-gradient-to-tr from-cyan-500/10 via-blue-600/5 to-purple-600/10 blur-3xl" />
      <div className="pointer-events-none absolute top-10 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] animate-glow" />

      <ToastContainer position="top-right" autoClose={4000} theme="dark" transition={Bounce} />

      {/* Main Glass Panel */}
      <div className="panel-card relative w-full max-w-5xl overflow-hidden border border-slate-800/90 bg-slate-950/80 shadow-2xl shadow-cyan-950/50 lg:grid lg:grid-cols-12">
        {/* Left Side Banner */}
        <div className="hidden lg:col-span-5 lg:flex lg:flex-col lg:justify-between border-r border-slate-800/80 bg-gradient-to-br from-slate-900/90 via-slate-950 to-blue-950/40 p-10">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 text-xl font-bold tracking-widest text-white">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-cyan-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span>VISOR<span className="text-cyan-400">CAM</span></span>
            </Link>

            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                SECURE AUTH PORTAL
              </div>
              <h2 className="text-3xl font-extrabold text-white leading-tight">
                Welcome back to your <span className="gradient-text">privacy shield.</span>
              </h2>
              <p className="text-xs leading-relaxed text-slate-300">
                Sign in to manage real-time camera protection, intruder capture logs, and personalized security settings.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Real-Time Face Gaze Monitoring</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>Instant Auto-Blur Screen Lock</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>100% Local On-Device Processing</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 space-y-1">
            <p className="font-bold text-white flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-amber-400" />
              Zero Cloud Data Exposure
            </p>
            <p className="text-slate-400 leading-normal">
              Your webcam feeds never leave your local browser session.
            </p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300 shadow-lg shadow-cyan-500/20">
            <img src="/logo.jpeg" className="h-full w-full rounded-full object-cover p-1" alt="VisorCam logo" />
          </div>

          <div className="text-center space-y-1">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">Sign in to VisorCam</h1>
            <p className="text-xs text-slate-400">Enter your account credentials to access your dashboard</p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-slate-300">Username</label>
              <div className="relative">
                <UserRound className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400 h-4 w-4" />
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input_prm pl-10"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <label className="font-semibold text-slate-300">Password</label>
                <button type="button" className="text-cyan-400 hover:underline">
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-cyan-400 h-4 w-4" />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input_prm pl-10 pr-10"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-cyan-300"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={onSubmit}
              disabled={loading}
              className="btn-prm flex items-center justify-center gap-2 py-3.5 mt-2"
            >
              <span>{loading ? "Signing in..." : "Sign In to Workspace"}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            {/* Register Redirect Link */}
            <div className="pt-4 text-center text-xs text-slate-400 border-t border-slate-800">
              Don't have a VisorCam account?{" "}
              <Link href="/auth/register" className="font-bold text-cyan-400 hover:text-cyan-300 hover:underline">
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;