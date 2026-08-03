"use client";

import moment from "moment";
import {
  CalendarDays,
  Clock,
  Mail,
  ShieldCheck,
  UserRound,
  Sliders,
  Bell,
  Lock,
  Camera,
  CheckCircle2,
  KeyRound,
  Shield,
  Zap,
  Sparkles
} from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import ImgUpload from "../../../components/ImgUpload.js";

const Page = () => {
  const [user, setUser] = useState(null);
  const [autoBlur, setAutoBlur] = useState(true);
  const [soundAlert, setSoundAlert] = useState(false);
  const [sensitivity, setSensitivity] = useState("High");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");
      setUser(storedUser);
    }
  }, []);

  const ll = user?.last_login
    ? moment(user.last_login).utc().format("Do MMMM YYYY, HH:mm [UTC]")
    : "Active now";
  const dj = user?.date_joined
    ? moment(user.date_joined).utc().format("Do MMMM YYYY")
    : "Recently joined";

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Ambient Background Lights */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-full max-w-7xl bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/4 right-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] animate-glow" />

      {/* Header Bar */}
      <Navbar />

      <main className="relative mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* TOP HERO PROFILE HEADER */}
        <section className="panel-card overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Identity Info */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="relative h-24 w-24 shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="User Avatar"
                  className="h-full w-full rounded-full object-cover border-2 border-cyan-400 shadow-xl shadow-cyan-500/20"
                />
                <span className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 border-2 border-slate-950 text-[10px] font-bold text-white">
                  ✓
                </span>
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  AUTHENTICATED USER
                </div>
                <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                  {user?.name || "VisorCam User"}
                </h1>
                <p className="text-sm font-mono text-cyan-300/90 mt-0.5">
                  @{user?.username || "visor_user"}
                </p>
              </div>
            </div>

            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-300">
                <ShieldCheck className="h-4 w-4" />
                <span>Protection Enabled</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2.5 text-xs font-semibold text-cyan-300">
                <Zap className="h-4 w-4" />
                <span>AI Guard: Ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* MAIN METADATA & PREFERENCES GRID */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Account Details Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Account Metadata Card */}
            <div className="panel-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                  <UserRound className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Account Information</h2>
                  <p className="text-xs text-slate-400">Verified credentials and registration details</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <div className="glass-panel p-4 space-y-1">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <UserRound className="h-3.5 w-3.5 text-cyan-400" />
                    Full Name
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {user?.name || "Not provided"}
                  </p>
                </div>

                {/* Username */}
                <div className="glass-panel p-4 space-y-1">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <KeyRound className="h-3.5 w-3.5 text-cyan-400" />
                    Username
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {user?.username || "Not provided"}
                  </p>
                </div>

                {/* Email Address */}
                <div className="glass-panel p-4 space-y-1">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-cyan-400" />
                    Email Address
                  </span>
                  <p className="text-sm font-semibold text-white truncate">
                    {user?.email || "Not provided"}
                  </p>
                </div>

                {/* Date Joined */}
                <div className="glass-panel p-4 space-y-1">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-cyan-400" />
                    Date Joined
                  </span>
                  <p className="text-sm font-semibold text-white">
                    {dj}
                  </p>
                </div>
              </div>

              {/* Last Activity Card */}
              <div className="glass-panel p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-cyan-400 shrink-0" />
                  <div>
                    <p className="text-xs text-slate-400">Last System Activity</p>
                    <p className="text-sm font-mono font-medium text-slate-200 mt-0.5">{ll}</p>
                  </div>
                </div>
                <span className="rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-[11px] font-semibold text-cyan-300">
                  Synced
                </span>
              </div>
            </div>

            {/* Privacy Preferences Card */}
            <div className="panel-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                  <Sliders className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Privacy Preferences</h2>
                  <p className="text-xs text-slate-400">Configure auto-shield response behaviors</p>
                </div>
              </div>

              <div className="space-y-4">
                {/* Auto-Blur Toggle */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-cyan-400" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Auto-Blur Screen</h4>
                      <p className="text-xs text-slate-400">Instant screen blur when extra face is detected</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setAutoBlur(!autoBlur)}
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      autoBlur ? "bg-cyan-500" : "bg-slate-700"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        autoBlur ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Sound Alert Toggle */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-cyan-400" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Sound Warning</h4>
                      <p className="text-xs text-slate-400">Play subtle audio alert on unauthorized viewing</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSoundAlert(!soundAlert)}
                    className={`relative h-6 w-11 rounded-full transition-colors ${
                      soundAlert ? "bg-cyan-500" : "bg-slate-700"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        soundAlert ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>

                {/* Detection Sensitivity Selector */}
                <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex items-center gap-3">
                    <Camera className="h-5 w-5 text-cyan-400" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Gaze Sensitivity</h4>
                      <p className="text-xs text-slate-400">Detection angle threshold sensitivity</p>
                    </div>
                  </div>
                  <select
                    value={sensitivity}
                    onChange={(e) => setSensitivity(e.target.value)}
                    className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-cyan-300 font-semibold outline-none focus:border-cyan-400"
                  >
                    <option value="High">High (Strict)</option>
                    <option value="Medium">Medium (Balanced)</option>
                    <option value="Low">Low (Permissive)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: ImgUpload & Security Audit Panel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Image Upload Glass Card */}
            <div className="panel-card p-6 sm:p-8">
              <ImgUpload user={user} />
            </div>

            {/* Security Compliance Audit Card */}
            <div className="panel-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Security Checklist</h3>
                  <p className="text-xs text-slate-400">Account status verification</p>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-3">
                  <span className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Camera Access Permissions
                  </span>
                  <span className="font-semibold text-emerald-400">Granted</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-3">
                  <span className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Local Privacy Processing
                  </span>
                  <span className="font-semibold text-emerald-400">100% On-Device</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-3">
                  <span className="flex items-center gap-2 text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Encrypted Session Token
                  </span>
                  <span className="font-semibold text-emerald-400">Valid</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;