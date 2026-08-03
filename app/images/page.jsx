import React from "react";
import Navbar from "../../components/Navbar.jsx";
import Card from "../../components/Card.jsx";
import PrivacyGuard from "../../components/PrivacyGuard.jsx";

const Page = () => {
  return (
    <div className="min-h-screen bg-[url('/wallpaper.png')] bg-cover bg-center">
      <div className="min-h-screen bg-slate-950/70">
        <Navbar />

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <section className="panel-card p-6 sm:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-medium text-cyan-300">Protected activity</p>
                <h1 className="mt-1 text-3xl font-semibold text-white">Secure image gallery</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  Review privacy events and protected captures in one polished dashboard.
                </p>
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
                Live monitoring ready
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4 sm:p-6">
              <PrivacyGuard />
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Page;