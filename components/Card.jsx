import React from "react";

const Card = () => {
  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 shadow-lg shadow-cyan-950/20 backdrop-blur-xl">
      <div className="mb-3 flex items-center justify-between text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
        <span>Date: 23/10/2007</span>
        <span>19:10 PM</span>
      </div>
      <img src="/logo.jpeg" className="mb-3 h-36 w-full rounded-2xl object-cover" alt="Captured activity" />
      <h3 className="text-xl font-semibold text-white">Protected Event</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">A secure capture from your active privacy monitoring session.</p>
      <button className="btn-prm mt-4 py-2.5">View details</button>
    </div>
  );
};

export default Card;