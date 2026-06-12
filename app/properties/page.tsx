'use client';

import { useState } from 'react';
import Link from 'next/link';

const MOCK_PROPERTIES = [
  { id: '1', title: 'Azure Waterfront Villa', price: 4500000, type: 'House', location: 'Beverly Hills, CA', beds: 5, baths: 4, sqft: 4500, label: 'LUXURY HOUSE' },
  { id: '2', title: 'Skyline Glass Penthouse', price: 2800000, type: 'Apartment', location: 'Manhattan, NY', beds: 3, baths: 3, sqft: 2800, label: 'MODERN FLAT' },
  { id: '3', title: 'Silicon Valley Smart Home', price: 1850000, type: 'House', location: 'Palo Alto, CA', beds: 4, baths: 3, sqft: 3200, label: 'TECH ESTATE' },
  { id: '4', title: 'Downtown Artist Loft', price: 950000, type: 'Apartment', location: 'Austin, TX', beds: 2, baths: 2, sqft: 1800, label: 'URBAN LOFT' }
];

export default function PropertiesPage() {
  const [filter, setFilter] = useState('All');

  const filteredProperties = filter === 'All' ? MOCK_PROPERTIES : MOCK_PROPERTIES.filter(p => p.type === filter);

  return (
    <div className="flex-1 flex flex-col p-8 bg-[#F8FDFF]">
       <div className="mb-10">
          <h1 className="text-4xl font-bold leading-none mb-4 text-[#1A202C]">
            Explore <span className="text-[#00B8D9]">Listings.</span>
          </h1>
          <p className="text-sm text-slate-500 max-w-2xl">Browse through our exclusive selection of premium properties.</p>
       </div>

       {/* Filters */}
       <div className="flex gap-4 mb-8">
          {['All', 'House', 'Apartment', 'Commercial', 'Land'].map((type) => (
             <button
               key={type}
               onClick={() => setFilter(type)}
               className={`px-4 py-2 rounded-xl text-sm font-bold border transition-colors ${filter === type ? 'bg-[#00B8D9] border-[#00B8D9] text-white' : 'bg-white border-slate-100 text-slate-600 hover:border-[#00B8D9]/30'}`}
             >
               {type}
             </button>
          ))}
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {filteredProperties.map((property, idx) => (
           <Link href={`/properties/${property.id}`} key={property.id} className="group">
             <div className="bg-white rounded-[2.5rem] p-4 flex flex-col h-[380px] border border-slate-100 shadow-lg shadow-cyan-900/5 group-hover:shadow-2xl group-hover:shadow-cyan-900/10 transition-all">
               <div className="relative flex-1 bg-slate-100 rounded-[2rem] mb-4 overflow-hidden">
                 <img 
                   src={`https://picsum.photos/seed/${property.id}/800/600`} 
                   alt={property.title} 
                   className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur py-1 px-3 rounded-full text-[10px] font-bold text-[#0097A7]">
                   {property.label}
                 </div>
                 <div className="absolute bottom-4 left-4 text-white">
                   <p className="text-xs opacity-80 font-medium">{property.location}</p>
                   <h4 className="font-bold text-lg">{property.title}</h4>
                 </div>
               </div>
               <div className="flex justify-between items-center px-2">
                 <div className="flex gap-4">
                   <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">🛏️ {property.beds} <span className="opacity-60">Beds</span></div>
                   <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">🛁 {property.baths} <span className="opacity-60">Baths</span></div>
                 </div>
                 <span className="text-lg font-bold text-[#00B8D9]">${(property.price / 1000000).toFixed(1)}M</span>
               </div>
             </div>
           </Link>
         ))}
       </div>
    </div>
  );
}
