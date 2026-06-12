'use client';

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col p-8 gap-8 bg-[#F8FDFF]">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold leading-none mb-4 text-[#1A202C]">Agent <span className="text-[#00B8D9]">Dashboard.</span></h1>
          <p className="text-sm text-slate-500">Manage your workspace and insights.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-lg shadow-cyan-900/5">
             <h2 className="font-bold text-[#1A202C] mb-6 flex items-center gap-2">
               <span className="text-[#00B8D9]">💼</span> Google Workspace
             </h2>
             <div className="grid sm:grid-cols-2 gap-4">
                <button className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-[#00B8D9]/30 hover:bg-[#F8FDFF] transition-all text-left group">
                   <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-[#00B8D9] group-hover:text-white transition-colors">
                      📄
                   </div>
                   <div>
                      <h3 className="font-bold text-sm text-[#1A202C]">Create Draft</h3>
                      <p className="text-[11px] text-slate-500">Google Docs</p>
                   </div>
                </button>
                <button className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-[#00B8D9]/30 hover:bg-[#F8FDFF] transition-all text-left group">
                   <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-500 group-hover:bg-[#00B8D9] group-hover:text-white transition-colors">
                      📅
                   </div>
                   <div>
                      <h3 className="font-bold text-sm text-[#1A202C]">Schedule Viewing</h3>
                      <p className="text-[11px] text-slate-500">Google Calendar</p>
                   </div>
                </button>
                <button className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 hover:border-[#00B8D9]/30 hover:bg-[#F8FDFF] transition-all text-left group">
                   <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-500 group-hover:bg-[#00B8D9] group-hover:text-white transition-colors">
                      💬
                   </div>
                   <div>
                      <h3 className="font-bold text-sm text-[#1A202C]">Agent Chat</h3>
                      <p className="text-[11px] text-slate-500">Google Chat spaces</p>
                   </div>
                </button>
             </div>
          </div>

          <div className="h-24 bg-[#E2F7FB] rounded-[2.5rem] border border-[#00B8D9]/20 flex items-center px-8 gap-8">
            <div className="flex-1">
              <p className="text-[10px] font-bold text-[#0097A7] uppercase tracking-widest mb-1">Performance Insight</p>
              <p className="text-sm font-medium text-cyan-900">Your listings generated 34% more leads this month.</p>
            </div>
            <button className="px-6 py-2 bg-white text-[#0097A7] text-sm font-bold rounded-xl border border-[#00B8D9]/20 hover:bg-[#00B8D9] hover:text-white transition-colors">View Analytics</button>
          </div>
        </div>

        <div className="col-span-1">
          <div className="bg-[#0F172A] p-6 rounded-[2.5rem] border border-slate-800 shadow-xl text-white h-full">
            <h2 className="font-bold mb-6 flex items-center gap-2">
               <span className="text-[#00E5FF]">✨</span> AI Toolkit
            </h2>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors border border-white/10">
                Generate Description
              </button>
              <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors border border-white/10">
                Estimate Market Price
              </button>
              <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors border border-white/10">
                Generate SEO Post
              </button>
              <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-colors border border-white/10 flex justify-between">
                Generate Video <span>(Veo)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
