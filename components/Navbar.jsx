"use client";

import Link from "next/link";
import { Camera, LogOut, Search, ShieldCheck, UserCircle, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  const logout = async () => {
    localStorage.clear();
    router.push("/auth/login");
  };

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-slate-950/70 px-4 py-3.5 backdrop-blur-2xl sm:px-6 lg:px-8 shadow-lg shadow-black/40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center gap-3 text-lg font-bold tracking-[0.2em] text-white transition sm:text-xl">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/40 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300 shadow-md shadow-cyan-500/20 transition group-hover:scale-105 group-hover:border-cyan-400">
            <ShieldCheck className="h-5 w-5 transition duration-300 group-hover:rotate-12" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-500"></span>
            </span>
          </div>
          <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent">
            VISOR<span className="text-cyan-400">CAM</span>
          </span>
        </Link>

        {/* Quick Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            className="w-72 rounded-full border border-slate-800 bg-slate-900/80 pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 outline-none transition focus:border-cyan-400 focus:bg-slate-900 focus:ring-2 focus:ring-cyan-500/20"
            placeholder="Search activity or settings..."
          />
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-2.5 text-xs font-semibold text-white sm:gap-3 sm:text-sm">
          <Link
            href="/images"
            className="hidden items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/60 px-3.5 py-2 text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-800 hover:text-cyan-300 sm:flex"
          >
            <Camera className="h-4 w-4 text-cyan-400" />
            Dashboard
          </Link>

          <Link
            href="/auth/profile"
            className="flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/60 px-3.5 py-2 text-slate-200 transition hover:border-cyan-400/40 hover:bg-slate-800 hover:text-cyan-300"
          >
            <UserCircle className="h-4 w-4 text-cyan-400" />
            <span className="hidden sm:inline">Profile</span>
          </Link>

          <Link
            href="/auth/register"
            className="hidden items-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-3.5 py-2 text-cyan-200 transition hover:bg-cyan-500/20 hover:text-white md:flex"
          >
            <UserPlus className="h-4 w-4" />
            Register
          </Link>

          <button
            onClick={logout}
            className="flex items-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/10 px-3.5 py-2 text-rose-300 transition hover:bg-rose-500/20 hover:text-rose-100 cursor-pointer"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;