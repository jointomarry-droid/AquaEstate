'use client';

import * as motion from 'motion/react-client';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex-1 flex flex-col md:flex-row p-8 gap-8 bg-[#F8FDFF]">
      {/* Sidebar Section */}
      <div className="w-full md:w-[320px] flex flex-col gap-6">
        <section className="bg-white p-6 rounded-3xl shadow-xl shadow-cyan-900/5 border border-[#00B8D9]/5">
          <h1 className="text-4xl font-bold leading-none mb-4 text-[#1A202C]">
            Find your <span className="text-[#00B8D9]">sanctuary.</span>
          </h1>
          <p className="text-sm text-slate-500 mb-6">
            Discover premium properties with AI-driven market valuations and immersive virtual tours.
          </p>
          <div className="space-y-3">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search Location..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F8FDFF] border border-slate-100 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B8D9]/20 text-slate-900"
              />
              <span className="absolute right-4 top-3 text-[#00B8D9]">🔍</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <select className="bg-[#F8FDFF] border border-slate-100 rounded-xl py-2 px-3 text-xs focus:outline-none text-slate-700">
                <option>Apartment</option>
                <option>Villa</option>
                <option>House</option>
              </select>
              <select className="bg-[#F8FDFF] border border-slate-100 rounded-xl py-2 px-3 text-xs focus:outline-none text-slate-700">
                <option>$500k - $2M</option>
                <option>$2M - $10M</option>
                <option>$10M+</option>
              </select>
            </div>
            <Link href="/properties">
              <button className="w-full mt-3 bg-[#00B8D9] hover:bg-[#0097A7] transition-colors text-white font-bold py-3 rounded-xl shadow-lg shadow-[#00B8D9]/30">
                Search Listings
              </button>
            </Link>
          </div>
        </section>

        <div className="bg-[#0F172A] p-5 rounded-3xl text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#00E5FF]/20 rounded-full blur-2xl"></div>
          <span className="inline-block px-2 py-1 bg-[#00E5FF] text-[#0F172A] text-[10px] font-bold rounded mb-2">AI MARKET TOOL</span>
          <h3 className="font-semibold mb-1">Instant Estimate</h3>
          <p className="text-xs text-slate-400 mb-3">Predict the market value of any property based on real-time data.</p>
          <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
            <span className="text-lg font-mono tracking-tighter">$1,240,000</span>
            <span className="text-[10px] text-emerald-400">+4.2% ↑</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-bold tracking-tight text-[#1A202C]">Featured <span className="font-light italic">Collections</span></h2>
          <div className="flex gap-2">
            <button className="w-8 h-8 rounded-full border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-400 transition-colors">←</button>
            <button className="w-8 h-8 rounded-full border border-[#00B8D9] hover:bg-[#00B8D9]/10 flex items-center justify-center text-[#00B8D9] transition-colors">→</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1">
          {/* Card 1 */}
          <Link href="/properties/1" className="group h-full">
            <div className="bg-white rounded-[2.5rem] p-4 flex flex-col h-full border border-slate-100 shadow-lg shadow-cyan-900/5 group-hover:shadow-2xl group-hover:shadow-cyan-900/10 transition-all">
              <div className="relative flex-1 bg-slate-100 rounded-[2rem] min-h-[250px] mb-4 overflow-hidden">
                <img src="https://picsum.photos/seed/house1/800/600" alt="Villa" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur py-1 px-3 rounded-full text-[10px] font-bold text-[#0097A7]">LUXURY HOUSE</div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs opacity-80 font-medium">Beverly Hills, CA</p>
                  <h4 className="font-bold text-lg">Azure Waterfront Villa</h4>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">🛏️ 5 <span className="opacity-60">Beds</span></div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">🛁 4 <span className="opacity-60">Baths</span></div>
                </div>
                <span className="text-lg font-bold text-[#00B8D9]">$4.5M</span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link href="/properties/2" className="group h-full">
            <div className="bg-white rounded-[2.5rem] p-4 flex flex-col h-full border border-slate-100 shadow-lg shadow-cyan-900/5 group-hover:shadow-2xl group-hover:shadow-cyan-900/10 transition-all">
              <div className="relative flex-1 bg-slate-200 rounded-[2rem] min-h-[250px] mb-4 overflow-hidden">
                <img src="https://picsum.photos/seed/penthouse2/800/600" alt="Penthouse" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur py-1 px-3 rounded-full text-[10px] font-bold text-[#0097A7]">MODERN FLAT</div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs opacity-80 font-medium">Manhattan, NY</p>
                  <h4 className="font-bold text-lg">Skyline Glass Penthouse</h4>
                </div>
              </div>
              <div className="flex justify-between items-center px-2">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">🛏️ 3 <span className="opacity-60">Beds</span></div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">🛁 3 <span className="opacity-60">Baths</span></div>
                </div>
                <span className="text-lg font-bold text-[#00B8D9]">$2.8M</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="h-24 bg-[#E2F7FB] rounded-3xl border border-[#00B8D9]/20 flex items-center px-8 gap-8">
          <div className="flex-1">
            <p className="text-[10px] font-bold text-[#0097A7] uppercase tracking-widest mb-1">Recent Activity</p>
            <p className="text-sm font-medium text-cyan-900">124 potential buyers viewed your saved properties in the last 24h.</p>
          </div>
          <div className="hidden sm:flex -space-x-3">
            <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white overflow-hidden">
               <img src="https://i.pravatar.cc/100?img=1" className="w-full h-full object-cover"/>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white overflow-hidden">
               <img src="https://i.pravatar.cc/100?img=2" className="w-full h-full object-cover"/>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-500 border-2 border-white overflow-hidden">
               <img src="https://i.pravatar.cc/100?img=3" className="w-full h-full object-cover"/>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#00B8D9] border-2 border-white flex items-center justify-center text-[10px] text-white font-bold tracking-tighter">+12</div>
          </div>
          <Link href="/dashboard">
             <button className="px-6 py-2 bg-white text-[#0097A7] text-sm font-bold rounded-xl border border-[#00B8D9]/20 hover:bg-[#00B8D9] hover:text-white transition-colors">View Analytics</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
