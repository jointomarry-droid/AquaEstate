'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const [user, setUser] = useState<any>(null); // simple mock for now

  const navLinks = [
    { name: 'Marketplace', path: '/properties' },
    { name: 'New Projects', path: '/projects' },
    { name: 'AI Insights', path: '/dashboard' },
    { name: 'Agents', path: '/agents' },
  ];

  return (
    <header className="h-16 flex items-center justify-between px-8 bg-white/70 backdrop-blur-md border-b border-[#00B8D9]/10">
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#00B8D9] to-[#0097A7] rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#0097A7]">
            AQUA<span className="font-light text-[#1A202C]">ESTATES</span>
          </span>
        </Link>
      </div>
      
      <nav className="flex gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`${
              pathname === link.path
                ? 'text-[#00B8D9] border-b-2 border-[#00B8D9]'
                : 'hover:text-[#00B8D9] text-[#1A202C] transition-colors'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
      
      <div className="flex items-center gap-4">
        {user ? (
           <div className="flex items-center gap-4">
             <Link href="/dashboard" className="text-sm font-medium text-slate-700">
                Dashboard
             </Link>
             <button className="text-sm font-medium text-red-500 hover:text-red-600">
               Sign Out
             </button>
           </div>
        ) : (
           <>
             <button className="px-4 py-2 text-sm font-semibold text-[#0097A7] hover:bg-[#00B8D9]/5 rounded-lg transition-colors">
               List Property
             </button>
             <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
               <div className="w-3 h-3 bg-[#00B8D9] rounded-full"></div>
             </div>
           </>
        )}
      </div>
    </header>
  );
}
