'use client';

const MOCK_BLOGS = [
  { id: '1', title: 'The Future of Smart Homes in 2026', category: 'Technology', date: 'Oct 12, 2026', excerpt: 'Discover how smart home technology is reshaping the luxury real estate market and what buyers are looking for.' },
  { id: '2', title: 'Top 5 Neighborhoods for Families in Austin', category: 'Guides', date: 'Oct 10, 2026', excerpt: 'If you are looking to relocate with your family, these neighborhoods offer the best schools, parks, and communities.' },
  { id: '3', title: 'Understanding Commercial Leases', category: 'Commercial', date: 'Oct 05, 2026', excerpt: 'A comprehensive guide to navigating triple net leases and commercial term negotiations in the current market.' },
];

export default function BlogList() {
  return (
    <div className="flex-1 flex flex-col p-8 gap-8 bg-[#F8FDFF]">
      <div className="flex justify-between items-end">
        <div>
           <h1 className="text-4xl font-bold leading-none mb-4 text-[#1A202C]">Real Estate <span className="text-[#00B8D9]">Insights.</span></h1>
           <p className="text-sm text-slate-500 max-w-2xl">Expert advice, market trends, and tips for buyers and sellers.</p>
        </div>
        <button className="hidden sm:flex bg-[#E2F7FB] text-[#0097A7] px-6 py-3 rounded-xl font-bold hover:bg-[#00B8D9] hover:text-white transition-colors border border-[#00B8D9]/20 text-sm">
          ✨ Generate Blog (AI)
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
         {MOCK_BLOGS.map(blog => (
            <div key={blog.id} className="group bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-lg shadow-cyan-900/5 hover:shadow-2xl hover:shadow-cyan-900/10 transition-all flex flex-col cursor-pointer">
               <div className="text-[10px] font-bold text-[#00B8D9] uppercase tracking-wider mb-4 flex items-center justify-between">
                 {blog.category}
                 <span className="text-slate-400 group-hover:text-slate-500 font-normal">{blog.date}</span>
               </div>
               <h2 className="text-lg font-bold text-[#1A202C] mb-3 group-hover:text-[#00B8D9] transition-colors line-clamp-2">{blog.title}</h2>
               <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6 flex-1">{blog.excerpt}</p>
               <span className="text-xs font-bold text-[#0097A7] group-hover:text-[#00B8D9] flex items-center">
                  Read Article <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
               </span>
            </div>
         ))}
      </div>
    </div>
  );
}
