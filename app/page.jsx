"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Camera,
  Eye,
  EyeOff,
  Lock,
  RefreshCw,
  Shield,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Zap,
  Activity,
  Sliders,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import Navbar from "../components/Navbar";
import "./marquee.css";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isPrivacyLockActive, setIsPrivacyLockActive] = useState(false);
  const [threatLevel, setThreatLevel] = useState("Safe");
  const [sensorActive, setSensorActive] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (!storedUser) {
      router.push("/auth/login");
      return;
    }
    setUser(storedUser);
  }, [router]);

  const toggleTestShield = () => {
    setIsPrivacyLockActive((prev) => !prev);
    if (!isPrivacyLockActive) {
      setThreatLevel("Intruder Detected!");
    } else {
      setThreatLevel("Safe");
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-7xl bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 left-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px] animate-glow" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px] animate-glow" />

      {/* Navigation */}
      <Navbar />

      <main className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* HERO SECTION */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headline & Primary Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-300 backdrop-blur-md shadow-sm">
              <Sparkles className="h-4 w-4 animate-pulse text-cyan-400" />
              <span>AI SHOULDER SURFING PROTECTION</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
              Keep your screen <br />
              <span className="gradient-text">visible only to you.</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              VisorCam helps protect confidential documents, code, and messages in shared workspaces by detecting unwanted viewers and automatically securing your display in real time.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/images"
                className="btn-prm group flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold"
              >
                <Camera className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span>Launch Camera Guard</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <button
                onClick={toggleTestShield}
                className="btn-sec flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium"
              >
                {isPrivacyLockActive ? (
                  <>
                    <Eye className="h-5 w-5 text-cyan-400" />
                    <span>Unlock Test View</span>
                  </>
                ) : (
                  <>
                    <Lock className="h-5 w-5 text-cyan-400" />
                    <span>Test Privacy Lock</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Status Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </span>
                <span>System Status: <strong className="text-slate-200">Active</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-400" />
                <span>Privacy Mode: <strong className="text-slate-200">Real-Time Blur</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-amber-400" />
                <span>Latency: <strong className="text-slate-200">&lt; 100ms</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Radar & Live Guard Preview */}
          <div className="lg:col-span-5">
            <div className="panel-card relative overflow-hidden p-6 sm:p-8">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
                    <Activity className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">Live Privacy Radar</h3>
                    <p className="text-xs text-slate-400">Active camera sensor feed</p>
                  </div>
                </div>

                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                  isPrivacyLockActive
                    ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                    : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                }`}>
                  {isPrivacyLockActive ? (
                    <>
                      <AlertTriangle className="h-3.5 w-3.5" />
                      Shield Locked
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Screen Secure
                    </>
                  )}
                </span>
              </div>

              {/* Interactive Preview Canvas */}
              <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 shadow-inner flex items-center justify-center group">
                {/* Simulated Screen Content or Blur Overlay */}
                <div className={`absolute inset-0 p-4 transition-all duration-500 ${isPrivacyLockActive ? "blur-md opacity-30 select-none" : "blur-none opacity-100"}`}>
                  <div className="h-full w-full rounded-xl border border-dashed border-slate-700 bg-slate-950/60 p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-cyan-400">VISORCAM_SECURE_DOC.pdf</span>
                      <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">Confidential</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-3/4 bg-slate-800 rounded"></div>
                      <div className="h-2 w-1/2 bg-slate-800 rounded"></div>
                      <div className="h-2 w-5/6 bg-slate-800 rounded"></div>
                    </div>
                    <div className="text-[10px] text-slate-500 flex items-center gap-1">
                      <Shield className="h-3 w-3 text-cyan-400" />
                      Protected by VisorCam AI
                    </div>
                  </div>
                </div>

                {/* Privacy Curtain Overlay when Locked */}
                {isPrivacyLockActive && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/80 p-4 text-center backdrop-blur-md transition-all duration-300">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/20 text-amber-300 shadow-lg shadow-amber-500/20 animate-bounce">
                      <EyeOff className="h-7 w-7" />
                    </div>
                    <h4 className="mt-3 text-base font-bold text-white">Privacy Lock Active</h4>
                    <p className="mt-1 text-xs text-slate-300 max-w-xs">
                      Unwanted viewer detected! Screen content is blurred to protect your sensitive data.
                    </p>
                    <button
                      onClick={toggleTestShield}
                      className="mt-4 rounded-xl bg-amber-500 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-amber-400"
                    >
                      Dismiss Blur Demo
                    </button>
                  </div>
                )}

                {/* Radar Sweeper Visual when unlocked */}
                {!isPrivacyLockActive && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30">
                    <div className="relative h-48 w-48 rounded-full border border-cyan-500/30 flex items-center justify-center">
                      <div className="absolute h-32 w-32 rounded-full border border-cyan-500/20" />
                      <div className="absolute h-16 w-16 rounded-full border border-cyan-500/20" />
                      {/* Radar Beam */}
                      <div className="absolute h-full w-full rounded-full animate-radar bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(6,182,212,0.4)_360deg)]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Status Footer */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Sensor Mode: <strong className="text-cyan-300">Face Gaze Tracker</strong></span>
                <button
                  onClick={() => setSensorActive(!sensorActive)}
                  className="flex items-center gap-1 hover:text-white transition"
                >
                  <RefreshCw className={`h-3.5 w-3.5 ${sensorActive ? "text-cyan-400" : "text-slate-500"}`} />
                  {sensorActive ? "Sensor Online" : "Sensor Paused"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS & STATS BAR */}
        <section className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="panel-card p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
              <Zap className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">&lt; 100ms</p>
              <p className="text-xs text-slate-400">Instant Blur Latency</p>
            </div>
          </div>

          <div className="panel-card p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">99.8%</p>
              <p className="text-xs text-slate-400">Intruder Detection Rate</p>
            </div>
          </div>

          <div className="panel-card p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">100% Local</p>
              <p className="text-xs text-slate-400">On-Device Privacy Engine</p>
            </div>
          </div>
        </section>

        {/* MAIN DASHBOARD & FEATURES GRID */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Quick Actions & Navigation Hub */}
          <div className="lg:col-span-7 space-y-6">
            <div className="panel-card p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Quick Actions</span>
                <h2 className="text-2xl font-bold text-white mt-1">What would you like to do?</h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Link
                  href="/images"
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition duration-300 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 transition group-hover:scale-110">
                    <Camera className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white flex items-center justify-between">
                    Start Detection
                    <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100 group-hover:translate-x-1 text-cyan-400" />
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Turn on live camera tracking and secure your display in real time.
                  </p>
                </Link>

                <Link
                  href="/images"
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition duration-300 hover:border-cyan-500/50 hover:bg-slate-900 hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 transition group-hover:scale-110">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white flex items-center justify-between">
                    View Activity Log
                    <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100 group-hover:translate-x-1 text-cyan-400" />
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                    Review captured intruder snapshots and security event logs.
                  </p>
                </Link>
              </div>

              {/* Core Feature Highlights */}
              <div className="pt-4 border-t border-slate-800 space-y-4">
                <h3 className="text-sm font-semibold text-slate-300">Why choose VisorCam?</h3>
                <div className="grid gap-3 sm:grid-cols-2 text-xs">
                  <div className="flex items-start gap-2.5 rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                    <Eye className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Gaze Detection</span>
                      <p className="text-slate-400 mt-0.5">Identifies angles of external viewers looking over your shoulder.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 rounded-xl border border-slate-800/80 bg-slate-900/40 p-3">
                    <Sliders className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Custom Sensitivity</span>
                      <p className="text-slate-400 mt-0.5">Adjust blur triggers and sensitivity parameters as needed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* User Account Overview Panel */}
          <div className="lg:col-span-5">
            <div className="panel-card p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">Account Center</span>
                <h2 className="text-2xl font-bold text-white mt-1">Profile Overview</h2>

                {/* User Info Box */}
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 text-center relative overflow-hidden">
                  <div className="relative mx-auto h-24 w-24">
                    <img
                      src="/logo.jpeg"
                      alt="VisorCam User Logo"
                      className="h-full w-full rounded-full object-cover border-2 border-cyan-500/40 shadow-xl shadow-cyan-500/20"
                    />
                    <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-slate-900 bg-emerald-500" />
                  </div>

                  <h3 className="mt-4 text-lg font-bold text-white">
                    {user?.name || user?.email || "Secure User"}
                  </h3>
                  <p className="text-xs text-cyan-300 font-mono mt-0.5">
                    {user?.email || "Protected Account"}
                  </p>

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                      <CheckCircle2 className="h-3 w-3" />
                      Protection Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href="/auth/profile"
                  className="btn-prm flex items-center justify-center gap-2 py-3"
                >
                  <span>Manage Profile Settings</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/images"
                  className="btn-sec flex items-center justify-center gap-2 py-2.5"
                >
                  <Camera className="h-4 w-4 text-cyan-400" />
                  <span>Go to Camera Monitor</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-slate-800/80 bg-slate-950 py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-cyan-400" />
            <span className="font-semibold text-slate-300">VISORCAM Privacy Suite</span>
          </div>
          <p>© {new Date().getFullYear()} VisorCam. All rights reserved. Real-time screen protection.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/auth/profile" className="hover:text-cyan-300 transition">Settings</Link>
            <Link href="/images" className="hover:text-cyan-300 transition">Detector</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
